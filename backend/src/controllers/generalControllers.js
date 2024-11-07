import { application } from "express";
import prisma from "../config/prismaConfig.js";

const dataRoot = async (req, res) => {
  try {
    const user = req.user; // Contains all user info (id, designation, department, etc.)
    const userId = user.id;

    // Determine if the user is an Applicant or Validator based on designation
    if (['Student', 'Faculty'].includes(user.designation)) {
      // Applicant Logic
      const applicant = await prisma.applicant.findUnique({
        where: { profileId: userId },
        select: {
          profileId: true,
          userName: true,
          email: true,
          department: true,        
          designation: true,
        }
      });

      // Check if the applicant exists
      if (!applicant) {
        return res.status(404).send("Applicant doesn't exist");
      }

      delete applicant._count;

      // Return the response for applicant
      return res.status(200).json({
        message: "Applicant Authorized",
        user: applicant,
        role: "Applicant"
      });

    } else if (['Supervisor', 'HOD', 'HOI', "FDCcoordinator"].includes(user.designation)) {
      // Validator Logic
      const validator = await prisma.validator.findUnique({
        where: { profileId: userId },
        select: {
          profileId: true,
          userName: true,
          email: true,
          department: true,
          designation: true,
        },
      });

      // Check if the validator exists
      if (!validator) {
        return res.status(404).send("Validator doesn't exist");
      }

      delete validator._count;

      // Return the response for validator
      return res.status(200).json({
        message: "Validator Authorized",
        user: validator,
        role: "Validator"
      });
    } else {
      return res.status(403).send("Unauthorized");
    }

  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getApplicationsByStatus = async (req, res) => {
  try {
    const user = req.user;
    const userId = user.id;
    const take = parseInt(req.query.take) || 5;
    const skip = parseInt(req.query.skip) || 0;
    const status = req.params.status.toUpperCase(); // Expected: "PENDING", "ACCEPTED", or "REJECTED"
    const sortBy = req.query?.sortBy;
    const sortValue = req.query?.sortValue;

    const validStatuses = ["PENDING", "ACCEPTED", "REJECTED"];
    if (!validStatuses.includes(status)) {
      return res.status(400).send("Invalid status");
    }

    let applications, totalApplications;

    // Filter conditions for Student and Faculty
    if (['Student', 'Faculty'].includes(user.designation)) {
      const baseWhere = {
        applicantId: userId,
        ...(status === "PENDING" && {
          OR: [
            { fdccoordinatorValidation: "PENDING" },
            { supervisorValidation: "PENDING" },
            { hodValidation: "PENDING" },
            { hoiValidation: "PENDING" },
          ],
        }),
        ...(status === "ACCEPTED" && {
          AND: [
            { fdccoordinatorValidation: user.designation === "Faculty" ? "ACCEPTED" : null },
            {
              OR: [
                { supervisorValidation: "ACCEPTED" },
                { supervisorValidation: user.designation === "Student" ? "ACCEPTED" : null }
              ]
            },
            { hodValidation: "ACCEPTED" },
            { hoiValidation: "ACCEPTED" },
          ],
        }),
        ...(status === "REJECTED" && {
          OR: [
            { fdccoordinatorValidation: "REJECTED" },
            { supervisorValidation: "REJECTED" },
            { hodValidation: "REJECTED" },
            { hoiValidation: "REJECTED" },
          ],
        }),
      };

      // Apply case-insensitive filter for search functionality
      if (sortBy && sortValue) {
        baseWhere[sortBy] = {
          contains: sortValue,
          mode: 'insensitive',
        };
      }

      // Count and fetch applications
      totalApplications = await prisma.application.count({ where: baseWhere });
      applications = await prisma.application.findMany({
        where: baseWhere,
        select: {
          applicationId: true,
          applicantName: true,
          formData: true,
          createdAt: true,
        },
        take,
        skip,
        orderBy: { createdAt: "desc" },
      });

    // Filter conditions for Validators (Supervisor, HOD, HOI, FDCcoordinator)
    } else if (['Supervisor', 'HOD', 'HOI', "FDCcoordinator"].includes(user.designation)) {
      const validationField = `${user.designation.toLowerCase()}Validation`;

      const baseWhere = {
        validators: { some: { profileId: userId } },
        [validationField]: status,
      };

      if (sortBy && sortValue) {
        baseWhere[sortBy] = {
          contains: sortValue,
          mode: 'insensitive',
        };
      }

      totalApplications = await prisma.application.count({
        where: baseWhere,
      });

      applications = await prisma.application.findMany({
        where: baseWhere,
        select: {
          applicationId: true,
          applicantName: true,
          formData: true,
          createdAt: true,
        },
        take,
        skip,
        orderBy: { createdAt: "desc" },
      });
    } else {
      // Unauthorized access for other user roles
      return res.status(403).send("Unauthorized");
    }

    // Format response with selected fields
    const responseApplications = applications.map(application => ({
      applicationId: application.applicationId,
      applicantName: application.applicantName,
      formData: {
        eventName: application.formData.eventName,
        applicantDepartment: application.formData.applicantDepartment,
      },
      createdAt: application.createdAt,
    }));

    return res.status(200).json({
      message: `${status} Applications Fetched Successfully`,
      totalApplications,
      applications: responseApplications,
    });

  } catch (error) {
    console.error(error);
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
        fdccoordinatorValidation: true,
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


export { getApplicationData, getFile, dataRoot, getApplicationsByStatus };
