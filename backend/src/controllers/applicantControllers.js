import prisma from "../config/prismaConfig.js";
import sendMail from "../services/sendMail.js";

const createApplication = async (req, res) => {
  const {
    id: applicantId,
    designation: applicantDesignation,
    department,
    institute,
  } = req.user;

  const formData = req.body;

  try {
    const applicant = await prisma.applicant.findUnique({
      where: { profileId: applicantId },
    });

    if (!applicant) {
      return res.status(404).send({ message: "Not an Applicant" });
    }

    const applicantName = applicant.userName;

    let hod, hoi, vc = null

    if (["FACULTY"].includes(applicant.designation)) {
      hod = await prisma.validator.findFirst({
        where: { department, designation: "HOD", institute },
      });
      if (!hod) {
        return res.status(404).send({ message: "HOD not found" });
      }
    }

    if (["HOD"].includes(applicant.designation)) {
      hoi = await prisma.validator.findFirst({
        where: { designation: "HOI", institute },
      });
      if (!hoi) {
        return res.status(404).send({ message: "HOI not found" });
      }
    }

    if (["HOI"].includes(applicant.designation)) {
      vc = await prisma.validator.findFirst({
        where: { designation: "VC" },
      });
      if (!vc) {
        return res.status(404).send({ message: "VC not found" });
      }
    }

    // Compile the validators list with available supervisors, FDC coordinator, HOD, and HOI
    const validators = [
      hod  && { profileId: hod?.profileId },
      hoi && { profileId: hoi?.profileId },
      vc && { profileId: vc?.profileId },
    ].filter(Boolean);

    const {
      proofOfTravel,
      proofOfAccommodation,
      proofOfAttendance,
      ...otherFiles
    } = req.files;

    // Prepare file buffers for fixed fields
    const proofOfTravelBuffer = proofOfTravel?.[0]?.buffer || null;
    const proofOfAccommodationBuffer =
      proofOfAccommodation?.[0]?.buffer || null;
    const proofOfAttendanceBuffer = proofOfAttendance?.[0]?.buffer || null;

    // Prepare an object to hold the expense proof buffers dynamically
    const expenseProofs = {};

    for (let i = 0; i < 10; i++) {
      const expenseProofField = `expenses[${i}].expenseProof`;
      if (otherFiles[expenseProofField]) {
        expenseProofs[`expenseProof${i}`] =
          otherFiles[expenseProofField][0].buffer;
      }
    }

    // Construct the application data object
    const applicationData = {
      applicantName,
      formData: JSON.parse(JSON.stringify(formData)),
      proofOfTravel: proofOfTravelBuffer,
      proofOfAccommodation: proofOfAccommodationBuffer,
      proofOfAttendance: proofOfAttendanceBuffer,
      ...expenseProofs, // Add dynamically generated expense proof fields
      hodValidation: ["FACULTY"].includes(applicant.designation)
        ? "PENDING"
        : undefined,
      hoiValidation: ["HOD"].includes(applicant.designation)
        ? "PENDING"
        : undefined,
      vcValidation: ["HOI"].includes(applicant.designation)
        ? "PENDING"
        : undefined,
    };

    // Create new application entry with linked applicant and validators
    const newApplication = await prisma.application.create({
      data: {
        ...applicationData,
        applicant: {
          connect: { profileId: applicantId },
        },
        validators: {
          connect: validators,
        },
      },
    });

    if (applicantDesignation === "Faculty") {
      if (fdccoordinator) {
        sendMail(
          fdccoordinator.email,
          `http://localhost:5173/validator/dashboard/pending/${newApplication.applicationId}`,
          true,
          null
        );
      } else {
        sendMail(
          formData.primarySupervisorEmail,
          `http://localhost:5173/validator/dashboard/pending/${newApplication.applicationId}`,
          true,
          null
        );
        formData.anotherSupervisorEmail &&
          sendMail(
            formData.anotherSupervisorEmail,
            `http://localhost:5173/validator/dashboard/pending/${newApplication.applicationId}`,
            true,
            null
          );
      }
    } else {
      sendMail(
        formData.primarySupervisorEmail,
        `http://localhost:5173/validator/dashboard/pending/${newApplication.applicationId}`,
        true,
        null
      );
      formData.anotherSupervisorEmail &&
        sendMail(
          formData.anotherSupervisorEmail,
          `http://localhost:5173/validator/dashboard/pending/${newApplication.applicationId}`,
          true,
          null
        );
    }

    res.status(201).send({
      message: "Application created successfully",
      data: newApplication,
    });
  } catch (error) {
    console.error("Error creating application:", error);
    res.status(500).send({
      message: "Error creating application",
      error: error.message,
    });
  }
};

export { createApplication };
