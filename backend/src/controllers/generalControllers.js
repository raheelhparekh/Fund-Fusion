import { application } from "express";
import prisma from "../config/prismaConfig.js";
import {
  applicantDesignations,
  validatorDesignations,
} from "../config/designations.js";

const dataRoot = async (req, res) => {
  try {
    const user = req.user; // Contains all user info (id, designation, department, etc.)
    const userId = user.id;
    const userDesignation = user.designation;
    const role = user.role;

    if (
      applicantDesignations.includes(userDesignation) &&
      role === "applicant"
    ) {
      const applicant = await prisma.applicant.findUnique({
        where: { profileId: userId },
      });

      if (!applicant) {
        return res
          .status(404)
          .json({ message: "Applicant not found", data: null });
      }

      delete applicant.password;

      return res.status(200).json({
        message: "Applicant Authorized",
        user: applicant,
        role: "Applicant",
      });
    } else if (
      validatorDesignations.includes(userDesignation) &&
      role === "validator"
    ) {
      const validator = await prisma.validator.findUnique({
        where: { profileId: userId },
      });

      if (!validator) {
        return res
          .status(404)
          .json({ message: "Validator not found", data: null });
      }

      delete validator.password;

      return res.status(200).json({
        message: "Validator Authorized",
        user: validator,
        role: "Validator",
      });
    } else {
      return res
        .status(403)
        .json({ message: "Unauthorized access", data: null });
    }
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", data: null });
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
    if (applicantDesignations.includes(user.designation) && user.role === "applicant") {
      const baseWhere = {
        applicantId: userId,
        ...(status === "PENDING" && {
          OR: [
            { hodValidation: "PENDING" },
            { hoiValidation: "PENDING" },
            { vcValidation: "PENDING" },
            { accountsValidation: "PENDING" },
          ],
        }),
        ...(status === "ACCEPTED" && {
          AND: [
            { OR: [{ hodValidation: "ACCEPTED" }, { hodValidation: null }] },
            { OR: [{ hoiValidation: "ACCEPTED" }, { hoiValidation: null }] },
            { OR: [{ vcValidation: "ACCEPTED" }, { vcValidation: null }] },
            {
              OR: [
                { accountsValidation: "ACCEPTED" },
                { accountsValidation: null },
              ],
            },
          ],
        }),
        ...(status === "REJECTED" && {
          OR: [
            { hodValidation: "REJECTED" },
            { hoiValidation: "REJECTED" },
            { vcValidation: "REJECTED" },
            { accountsValidation: "REJECTED" },
          ],
        }),
      };

      // Apply case-insensitive filter for search functionality
      if (sortBy && sortValue) {
        baseWhere[sortBy] = {
          contains: sortValue,
          mode: "insensitive",
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
    } else if (validatorDesignations.includes(user.designation) && user.role === "validator") {
      const validationField = `${user.designation.toLowerCase()}Validation`;

      const baseWhere = {
        validators: { some: { profileId: userId } },
        [validationField]: status,
      };

      if (sortBy && sortValue) {
        baseWhere[sortBy] = {
          contains: sortValue,
          mode: "insensitive",
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
    const responseApplications = applications.map((application) => ({
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
    const user = req.user;

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
        hodValidation: true,
        hoiValidation: true,
        vcValidation: true,
        accountsValidation: true,
        rejectionFeedback: true,
        createdAt: true,
        applicant: {
          select: {
            designation: true,
          },
        },
      },
    });

    if (!applicationFull) {
      return res.status(404).json({
        message: "Application not found",
        data: null,
      });
    }

    let currentStatus;

    // Check if the user is an applicant or a validator
    if (applicantDesignations.includes(user.designation) && user.role === "applicant") {
      if (
        applicationFull.hodValidation === "PENDING" ||
        applicationFull.hoiValidation === "PENDING" ||
        applicationFull.vcValidation === "PENDING" ||
        applicationFull.accountsValidation === "PENDING"
      ) {
        currentStatus = "PENDING";
      } else if (
        applicationFull.supervisorValidation === "REJECTED" ||
        applicationFull.hodValidation === "REJECTED" ||
        applicationFull.hoiValidation === "REJECTED" ||
        applicationFull.fdccoordinatorValidation === "REJECTED"
      ) {
        currentStatus = "REJECTED";
      } else {
        currentStatus = "ACCEPTED";
      }
    } else if (validatorDesignations.includes(user.designation) && user.role === "validator") {
      const validationField = `${user.designation.toLowerCase()}Validation`;

      if (applicationFull[validationField] === "ACCEPTED") {
        currentStatus = "ACCEPTED";
      } else if (applicationFull[validationField] === "REJECTED") {
        currentStatus = "REJECTED";
      } else {
        currentStatus = "PENDING";
      }
    } else {
      return res.status(403).json({
        message: "Unauthorized",
        data: null,
      });
    }

    // Respond with the full application data and current status
    return res.status(200).json({
      message: "Application data retrieved successfully",
      data: { ...applicationFull, currentStatus },
    });
  } catch (error) {
    console.error("Error retrieving application data:", error);
    return res.status(500).json({
      message: "An error occurred while retrieving the application data",
      data: null,
    });
  }
};

const getFile = async (req, res) => {
  try {
    const { applicationId, fileName } = req.params;
    const user = req.user;
    const userId = user.id;

    const validFileNames = [
      "proofOfTravel",
      "proofOfAccommodation",
      "proofOfAttendance",
      "expenseProof0",
      "expenseProof1",
      "expenseProof2",
      "expenseProof3",
      "expenseProof4",
      "expenseProof5",
      "expenseProof6",
      "expenseProof7",
      "expenseProof8",
      "expenseProof9",
    ];

    if (!validFileNames.includes(fileName)) {
      return res.status(400).json({ error: "Invalid File request" });
    }

    let applicationSelection = {};

    const fileSelection = {
      proofOfTravel: false,
      proofOfAccommodation: false,
      proofOfAttendance: false,
      expenseProof0: false,
      expenseProof1: false,
      expenseProof2: false,
      expenseProof3: false,
      expenseProof4: false,
      expenseProof5: false,
      expenseProof6: false,
      expenseProof7: false,
      expenseProof8: false,
      expenseProof9: false,
    };

    if (validFileNames.includes(fileName)) {
      fileSelection[fileName] = true;
    }

    let myApplication;

    if (applicantDesignations.includes(user.designation) && user.role === "applicant") {
      myApplication = await prisma.applicant.findUnique({
        where: {
          profileId: userId,
        },
        select: {
          applications: {
            where: {
              applicationId,
            },
            select: fileSelection,
          },
        },
      });
    } else if (validatorDesignations.includes(user.designation) && user.role === "validator") {
      myApplication = await prisma.validator.findUnique({
        where: {
          profileId: userId,
        },
        select: {
          applications: {
            where: {
              applicationId,
            },
            select: fileSelection,
          },
        },
      });
    }

    const myFile = myApplication?.applications[0];

    if (!myFile) {
      return res.status(404).json({ error: "File not found" });
    }

    // Retrieve the file buffer dynamically based on the fileName
    const fileBuffer = myFile[fileName];

    // If file buffer doesn't exist
    if (!fileBuffer) {
      return res.status(404).json({ error: "File content not found" });
    }

    // Set response headers for PDF file download
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${fileName}.pdf"`
    );

    // Send the file buffer as a response
    return res.send(fileBuffer);
  } catch (error) {
    console.error("Error retrieving application data:", error);
    return res.status(500).json({
      error: "An error occurred while retrieving the application data",
    });
  }
};

export { getApplicationData, getFile, dataRoot, getApplicationsByStatus };
