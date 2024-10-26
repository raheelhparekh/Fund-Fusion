import prisma from "../config/prismaConfig.js";

const dataRoot = async (req, res) => {
  try {
    const user = req.user; // Contains all user info (id, designation, department, etc.)
    const userId = user.id;

    // Initialize the applications object to categorize by status
    const applications = { "PENDING": [], "REJECTED": [], "ACCEPTED": [] };

    // Determine if the user is an Applicant or Validator based on designation
    if (['Student', 'Faculty'].includes(user.designation)) {
      // Applicant Logic
      const applicant = await prisma.applicant.findUnique({
        where: { profileId: userId },
        include: {
          applications: true, // Include related applications in the query
        }
      });

      // Check if the applicant exists
      if (!applicant) {
        return res.status(404).send("Applicant doesn't exist");
      }

      // Categorize applications based on their validation status
      applicant.applications.forEach((application) => {
        const status = application.hoiValidation || application.hodValidation || application.supervisorValidation;

        const applicationData = {
          applicantId: application.applicantId,
          applicantName: application.applicantName,
          applicationId: application.applicationId,
          createdAt: application.createdAt,
          formData: {
            eventName: application.formData.eventName,
            applicantDepartment: application.formData.applicantDepartment,
          },
          supervisorValidation: application.supervisorValidation,
          hodValidation: application.hodValidation,
          hoiValidation: application.hoiValidation,
        };

        if (applications[status]) {
          applications[status].push(applicationData);
        }
      });

      // Remove the password & applications before sending user info
      delete applicant.password;
      delete applicant.applications;

      // Return the response for applicant
      return res.status(200).json({
        message: "Applicant Authorized",
        user: applicant,
        applications: applications,
      });

    } else if (['Supervisor', 'HOD', 'HOI'].includes(user.designation)) {
      // Validator Logic
      const validator = await prisma.validator.findUnique({
        where: { profileId: userId },
        include: {
          applications: true, // Include related applications in the query
        }
      });

      // Check if the validator exists
      if (!validator) {
        return res.status(404).send("Validator doesn't exist");
      }

      // Categorize applications based on the validator's designation
      validator.applications.forEach((application) => {
        const status = application[`${validator.designation.toLowerCase()}Validation`];

        const applicationData = {
          applicantId: application.applicantId,
          applicantName: application.applicantName,
          applicationId: application.applicationId,
          createdAt: application.createdAt,
          formData: {
            eventName: application.formData.eventName,
            applicantDepartment: application.formData.applicantDepartment,
          },
          supervisorValidation: application.supervisorValidation,
          hodValidation: application.hodValidation,
          hoiValidation: application.hoiValidation,
        };

        if (applications[status]) {
          applications[status].push(applicationData);
        }
      });

      // Remove the password & applications before sending user info
      delete validator.password;
      delete validator.applications;

      // Return the response for validator
      return res.status(200).json({
        message: "Validator Authorized",
        user: validator,
        applications: applications,
      });
    } else {
      return res.status(403).send("Unauthorized");
    }

  } catch (error) {
    // Handle any errors that occur during the process
    console.log(error);
    res.status(500).send(error.message);
  }
};


const getApplicationData = async (req, res) => {
  try {
    const applicationId = req.params.applicationId;

    // Fetch application data excluding proof fields
    const applicationFull = await prisma.application.findUnique({
      where: {
        applicationId: applicationId,
      },
      select: {
        applicationId: true,
        applicantId: true,
        applicantName: true,
        formData: true,
        supervisorValidation: true,
        hodValidation: true,
        hoiValidation: true,
        createdAt: true,
      },
    });

    if (!applicationFull) {
      return res.status(404).json({ error: "Application not found" });
    }

    return res.status(200).json(applicationFull);
  } catch (error) {
    console.error("Error retrieving application data:", error);
    return res
      .status(500)
      .json({
        error: "An error occurred while retrieving the application data",
      });
  }
};

const getFile = async (req, res) => {
  try {
    const { applicationId, fileName } = req.params;

    let proofOfTravel = false;
    let proofOfAccommodation = false;
    let proofOfAttendance = false;

    switch (fileName) {
      case "proofOfTravel":
        proofOfTravel = true;
        break;
      case "proofOfAccommodation":
        proofOfAccommodation = true;
        break;
      case "proofOfAttendance":
        proofOfAttendance = true;
        break;
      default:
        return res.status(400).json({ error: "Invalid File request" });
    }

    const myFile = await prisma.application.findUnique({
      where: { applicationId },
      select: {
        proofOfTravel,
        proofOfAccommodation,
        proofOfAttendance,
      },
    });

    if (!myFile) {
      return res.status(404).json({ error: "File not found" });
    }

    const fileBuffer = myFile[fileName];

    res.setHeader('Content-Type', 'application/pdf'); 
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}.pdf"`);

    return res.send(fileBuffer);

  } catch (error) {
    console.error("Error retrieving application data:", error);
    return res.status(500).json({
      error: "An error occurred while retrieving the application data",
    });
  }
};


export { getApplicationData, getFile, dataRoot };
