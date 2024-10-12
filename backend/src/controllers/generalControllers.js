import prisma from '../config/prismaConfig.js';

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
        createdAt: true
      },
    });

    if (!applicationFull) {
      return res.status(404).json({ error: 'Application not found' });
    }

    return res.status(200).json(applicationFull);

  } catch (error) {
    console.error('Error retrieving application data:', error);
    return res.status(500).json({ error: 'An error occurred while retrieving the application data' });
  }
};

export { getApplicationData };
