import prisma from "../config/prismaConfig.js";
import generateToken from "../services/generateToken.js";

const applicantLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    let validProfile = await prisma.applicant.findFirst({
      where: {
        userName: username,
      },
    });

    if (!validProfile) {
      return res.status(404).json({
        message: "Applicant User Doesn't exist",
        token: null,
      });
    }

    if (validProfile.password !== password) {
      return res.status(404).json({
        message: "Wrong Password",
        token: null,
      });
    }

    const tokenObject = {
      id: validProfile.profileId,
      designation: validProfile.designation,
      department: validProfile.department,
    };

    const token = generateToken(tokenObject);

    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ username: validProfile.userName });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const validatorLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    let validProfile = await prisma.validator.findFirst({
      where: {
        userName: username,
      },
    });

    if (!validProfile) {
      return res.status(404).json({
        message: "Validator User Doesn't exist",
        token: null,
      });
    }

    if (validProfile.password !== password) {
      return res.status(404).json({
        message: "Wrong Password",
        token: null,
      });
    }

    const tokenObject = {
      id: validProfile.profileId,
      designation: validProfile.designation,
      department: validProfile.department,
    };

    const token = generateToken(tokenObject);

    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ username: validProfile.userName });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const logout = async (req, res) => {
  res.clearCookie("access_token", { httpOnly: true });
  res.status(200).json("Logout Succesful");
};

export { applicantLogin, validatorLogin, logout };
