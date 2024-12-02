import prisma from '../config/prismaConfig.js';

const createApplication = async (req, res) => {
  const applicantId = req.user.id;
  const department = req.user.department;
  const applicantDesignation = req.user.designation;

  const formData = req.body;
  const { proofOfTravel, proofOfAccommodation, proofOfAttendance } = req.files;

  try {
    const applicant = await prisma.applicant.findUnique({
      where: { profileId: applicantId }
    });

    if (!applicant) {
      return res.status(404).send("Applicant invalid");
    }

    const applicantName = applicant.userName;

    let supervisor = null;
    let additionalSupervisor = null;

    // Require a primary supervisor email for Students
    if (!formData.primarySupervisorEmail && applicantDesignation === "Student") {
      return res.status(404).send("Supervisor Email Required");
    }

    // Supervisor logic: Only apply if supervisor email fields are provided
    if (formData.primarySupervisorEmail) {
      supervisor = await prisma.validator.findUnique({
        where: { email: formData.primarySupervisorEmail }
      });

      if (!supervisor || supervisor.designation !== "Supervisor" || supervisor.department !== department) {
        return res.status(404).send("Invalid supervisor information");
      }
    }

    if (formData.anotherSupervisorEmail) {
      additionalSupervisor = await prisma.validator.findUnique({
        where: { email: formData.anotherSupervisorEmail }
      });

      if (additionalSupervisor?.profileId === supervisor?.profileId) {
        return res.status(404).send("Additional Supervisor's email can't be the same as Supervisor's");
      }

      if (additionalSupervisor?.designation !== "Supervisor") {
        return res.status(404).send("Invalid additional supervisor email");
      }
    }

    let fdccoordinator = null;

    // Retrieve FDC coordinator only for Faculty applicants
    if (applicantDesignation === "Faculty") {
      fdccoordinator = await prisma.validator.findFirst({
        where: { department, designation: "FDCcoordinator" }
      });
      if (!fdccoordinator) return res.status(404).send("Invalid Email for FDC coordinator");
    }

    // Retrieve HOD and HOI (required for all applicants)
    const hod = await prisma.validator.findFirst({
      where: { department, designation: 'HOD' }
    });
    if (!hod) return res.status(404).send("HOD not found");

    const hoi = await prisma.validator.findFirst({
      where: { designation: 'HOI' }
    });
    if (!hoi) return res.status(404).send("HOI not found");

    // Compile the validators list with available supervisors, FDC coordinator, HOD, and HOI
    const validators = [
      ...(supervisor ? [{ profileId: supervisor.profileId }] : []),
      ...(additionalSupervisor ? [{ profileId: additionalSupervisor.profileId }] : []),
      ...(fdccoordinator ? [{ profileId: fdccoordinator.profileId }] : []),
      { profileId: hod.profileId },
      { profileId: hoi.profileId }
    ];

    // Prepare file buffers
    const proofOfTravelBuffer = proofOfTravel?.[0]?.buffer || null;
    const proofOfAccommodationBuffer = proofOfAccommodation?.[0]?.buffer || null;
    const proofOfAttendanceBuffer = proofOfAttendance?.[0]?.buffer || null;

    // Construct the application data object
    const applicationData = {
      applicantName,
      formData: JSON.parse(JSON.stringify(formData)),
      proofOfTravel: proofOfTravelBuffer,
      proofOfAccommodation: proofOfAccommodationBuffer,
      proofOfAttendance: proofOfAttendanceBuffer,
      fdccoordinatorValidation: applicantDesignation === "Faculty" ? (supervisor || additionalSupervisor) ? undefined : "PENDING" : undefined,
      supervisorValidation: formData.primarySupervisorEmail ? "PENDING" : undefined,
    };

    // Create new application entry with linked applicant and validators
    const newApplication = await prisma.application.create({
      data: {
        ...applicationData,
        applicant: {
          connect: { profileId: applicantId } // Link the applicant by profileId
        },
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
};

export { createApplication };
