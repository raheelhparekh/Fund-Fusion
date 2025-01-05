import prisma from "../config/prismaConfig.js";
import generateToken from "../services/generateToken.js";

const applicantLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the applicant profile exists
    const validProfile = await prisma.user.findUnique({
      where: {
        email
      },
    });

    if (!validProfile) {
      return res.status(404).json({
        message: "Applicant User Doesn't exist",
        data: null,
      });
    }

    // Check if the password is correct
    if (validProfile.password !== password) {
      return res.status(404).json({
        message: "Wrong Password",
        data: null,
      });
    }

    // Create token object
    const tokenObject = {
      id: validProfile.profileId,
      designation: validProfile.designation,
      department: validProfile.department,
      institute: validProfile.institute,
      role: "applicant",
    };

    // Generate the token
    const token = generateToken(tokenObject);

    // Set the token as a cookie
    return res
      .cookie("access_token", token, { sameSite: 'None', secure: true, httpOnly: true })
      .status(200)
      .json({
        message: "Login Successful",
        data: { username: validProfile.userName, token },
      });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

const validatorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the validator profile exists
    let validProfile = await prisma.user.findUnique({
      where: {
        email
      },
    });

    if (!validProfile) {
      return res.status(404).json({
        message: "Validator User Doesn't exist",
        data: null,
      });
    }

    // Check if the password is correct
    if (validProfile.password !== password) {
      return res.status(404).json({
        message: "Wrong Password",
        data: null,
      });
    }

    // Create token object
    const tokenObject = {
      id: validProfile.profileId,
      designation: validProfile.designation,
      department: validProfile.department,
      institute: validProfile.institute,
      role: "validator",
    };

    // Generate the token
    const token = generateToken(tokenObject);

    // Set the token as a cookie
    return res
      .cookie("access_token", token, { sameSite: 'None', secure: true, httpOnly: true })
      .status(200)
      .json({
        message: "Login Successful",
        data: { username: validProfile.userName, token },
      });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    // Clear the access token cookie
    res.clearCookie("access_token", { httpOnly: true });

    // Respond with success message
    return res.status(200).json({
      message: "Logout Successful",
      data: null,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

export { applicantLogin, validatorLogin, logout };
