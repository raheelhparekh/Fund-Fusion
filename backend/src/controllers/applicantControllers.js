import prisma from '../config/prismaConfig.js';

const applicantRoot = async (req, res) => {
  try {
    const user = req.user; // Contains all user info (id, designation, department, etc.)

    // Fetch applicant information based on the user's profile ID
    const applicant = await prisma.applicant.findUnique({
      where: { profileId: user.id },
      include: {
        applications: true, // Include related applications in the query
      }
    });

    // Check if the applicant exists
    if (!applicant) {
      return res.status(404).send("Applicant doesn't exist");
    }

    // Categorize applications based on their validation status
    let applications = { "PENDING": [], "REJECTED": [], "ACCEPTED": [] };



    applicant.applications.forEach((application) => {
      let status = application.hoiValidation || application.hodValidation || application.supervisorValidation;

      let applicationData = {
        applicantId: application.applicantId,
        applicantName: application.applicantName,
        applicationId: application.applicationId,
        createdAt: application.createdAt,

        formData : {
          eventName: application.formData.eventName,
          applicantDepartment: application.formData.applicantDepartment
        },

        supervisorValidation: application.supervisorValidation,
        hodValidation: application.hodValidation,
        hoiValidation: application.hoiValidation,
      }

      if (applications[status]) {
        applications[status].push(applicationData);
      }
    });

    // Remove the password & applications before sending user info
    delete applicant.password;
    delete applicant.applications;
    
    // Return the response with the user's info and categorized applications
    return res.status(200).json({
      message: "Applicant Authorized",
      user: applicant,
      applications: applications
    });

  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const createApplication = async (req, res) => {

  let applicantId = req.user.id; 
  let department = req.user.department;
  // Access form data and files from the request
  let formData = req.body;
  const { proofOfTravel, proofOfAccommodation, proofOfAttendance } = req.files;

  try {
    let applicant = await prisma.applicant.findUnique({
      where: {
        profileId: applicantId
      }
    });

    if (!applicant) {
      return res.status(404).send("Applicant invalid");
    }
    let applicantName = applicant.userName;

    let supervisor = await prisma.validator.findUnique({
      where: {
        email: formData.primarySupervisorEmail,
      }
    });

    if (!supervisor || supervisor.designation !== "Supervisor") {
      return res.status(404).send("Supervisor email invalid");
    }

    if (supervisor.department !== department) {
      return res.status(404).send("Supervisor doesn't belong to your department");
    }

    let additionalSupervisor = null;

    if (formData.anotherSupervisorEmail) {
      additionalSupervisor = await prisma.validator.findUnique({
        where: {
          email: formData.anotherSupervisorEmail,
        }
      });
    }

    if (additionalSupervisor) {
      if (additionalSupervisor.profileId === supervisor.profileId) {
        return res.status(404).send("Additional Supervisor's email can't be the same as Supervisor's");
      }

      if (additionalSupervisor.designation !== "Supervisor") {
        return res.status(404).send("Additional Supervisor email invalid");
      }
    }

    let hod = await prisma.validator.findFirst({
      where: {
        AND: {
          department: department,
          designation: 'HOD'
        }
      }
    });

    if (!hod) {
      return res.status(404).send("HOD not found");
    }

    let hoi = await prisma.validator.findFirst({
      where: {
        AND: {
          designation: 'HOI'
        }
      }
    });

    if (!hoi) {
      return res.status(404).send("HOI not found");
    }

    let validators = [
      { profileId: supervisor.profileId },
      { profileId: hod.profileId },
      ...(additionalSupervisor ? [{ profileId: additionalSupervisor.profileId }] : []),
      { profileId: hoi.profileId }
    ];
    
    // Convert file buffers into Bytes for Prisma
    const proofOfTravelBuffer = proofOfTravel?.[0]?.buffer || null;
    const proofOfAccommodationBuffer = proofOfAccommodation?.[0]?.buffer || null;
    const proofOfAttendanceBuffer = proofOfAttendance?.[0]?.buffer || null;
  
    

    let applicationData = {
      applicantId,
      applicantName,
      formData: JSON.parse(JSON.stringify(formData)), // Convert formData to JSON
      proofOfTravel: proofOfTravelBuffer,        
      proofOfAccommodation: proofOfAccommodationBuffer,  
      proofOfAttendance: proofOfAttendanceBuffer  
    };

    let newApplication = await prisma.application.create({
      data: {
        ...applicationData,
        validators: {
          connect: validators
        }
      }
    });

    res.status(201).send(newApplication);
  } catch (error) {
    console.error('Error creating application:', error);
    res.status(500).send(error.message);
  }
}

export {
  applicantRoot,
  createApplication
}