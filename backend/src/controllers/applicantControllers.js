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

      if (applications[status]) {
        applications[status].push(application);
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
  let formData = req.body.formData;


  if (formData.applicantDepartment !== department) {
    return res.status(422).send("Department does not match.");
  }

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

    if (!supervisor || supervisor.designation != "Supervisor") {
      return res.status(404).send("Supervisor email invalid");
    }

    if (supervisor.department != department) {
      return res.status(404).send("Supervisor doesn't belong to your department")
    }

    let additionalSupervisor = null;

    if (formData.anotherSupervisorEmail!=null) {
      additionalSupervisor = await prisma.validator.findUnique({
        where: {
          email: formData.anotherSupervisorEmail,
        }
      });
    }

    if (additionalSupervisor){
      if (additionalSupervisor.profileId === supervisor.profileId) {
        return res.status(404).send("Additonal Supervisor's email can't be same as Supervisor's");
      }
  
      if (additionalSupervisor.designation != "Supervisor") {
        return res.status(404).send("Additonal Supervisor email invalid");
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
      {profileId: hoi.profileId}
    ];
    

    let applicationData = {
      applicantId,
      applicantName,
      formData
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
    res.status(500).send(error.message);
  }
}


export {
  applicantRoot,
  createApplication
}