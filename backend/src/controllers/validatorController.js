import prisma from '../config/prismaConfig.js';

const validatorRoot = async (req, res) => {
  try {
    const user = req.user; // Contains all user info (id, designation, department, etc.)
    const userId = user.id;

    // Fetch validator information and associated applications
    const validator = await prisma.validator.findUnique({
      where: { profileId: userId },
      include: {
        applications: true // Include related applications in the query
      }
    });

    // Check if the validator exists
    if (!validator) {
      return res.status(404).send("Validator doesn't exist");
    }


    // Initialize the applications object to categorize by status
    const applications = { "PENDING": [], "REJECTED": [], "ACCEPTED": [] };

    // Categorize applications based on the validator's designation
    validator.applications.forEach((application) => {
      const status = application[`${validator.designation.toLowerCase()}Validation`];

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
    delete validator.password;
    delete validator.applications;

    // Return the response with the validator's info and categorized applications
    return res.status(200).json({
      message: "Validator Authorized",
      user: validator,
      applications: applications
    });

  } catch (error) {
    // Handle any errors that occur during the process
    console.log(error);
    res.status(500).send(error.message);
  }
};

const applicationAction = async (req, res) => {

  let profileId = req.user.id;

  try {
    const { applicationId, action } = req.params; // actions = 'accepted' or 'rejected'

    const validator = await prisma.validator.findFirst({
      where: { profileId },
      include: { applications: true }
    });

    if (!validator) {
      return res.status(404).send("Validator doesn't exist");
    }

    const application = validator.applications.find(app => app.applicationId === applicationId);

    if (!application) {
      return res.status(404).send("Application not available");

    }

    const validationStatus = action.toUpperCase();  

    if (validationStatus !== "ACCEPTED" && validationStatus !== "REJECTED") {
      return res.status(400).send("Invalid status");
    }

    const validationData = {};

    switch (validator.designation) {
      case "Supervisor":
        if (application.supervisorValidation != "PENDING") {
          return res.status(400).send("Already performed an action, can't change status again")
        }
        validationData.supervisorValidation = validationStatus;
        if (validationStatus === "ACCEPTED") {
          validationData.hodValidation = "PENDING";
        }
        break;
      case "HOD":
        if (application.hodValidation != "PENDING") {
          return res.status(400).send("Already performed an action, can't change status again")
        }
        validationData.hodValidation = validationStatus;
        if (validationStatus === "ACCEPTED") {
          validationData.hoiValidation = "PENDING";
        }
        break;
      case "HOI":
        if (application.hoiValidation != "PENDING") {
          return res.status(400).send("Already performed an action, can't change status again")
        }
        validationData.hoiValidation = validationStatus;
        break;
      default:
        return res.status(400).send("Invalid validator designation");
    }

    const response = await prisma.application.update({
      where: { 
        applicationId: applicationId
      },
      data: validationData
    });

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


export {
  validatorRoot,
  applicationAction
}