import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { sendMail } from "../utils/mailer.js";
import prisma from "../db/db.config.js";
import jwt from "jsonwebtoken";
import { handleOtp } from "../utils/otpHandler.js";

const loginOtpSend = async (req, res) => {
  try {
    const email = req.body.email;
    if (!email) throw new ApiError(400, "Email address required");

    const user = await prisma.user.findFirst({
      where: {
        email: `${email}`.toLowerCase(),
      },
    });

    if (!user) throw new ApiError(404, "User not found");
    // const otp = await handleOtp();
    const otp = "123456";

    await prisma.user.update({
      where: { id: user.id },
      data: { otp, otp_expiry: new Date(Date.now() + 5 * 60 * 1000) },
    });
    // const mailed = await sendMail(email, otp);
    // if (!mailed) {
    //   throw new ApiError(500, "Something went wrong. OTP mail not sent.");
    // }
    res
      .status(200)
      .json(new ApiResponse(200, {}, "OTP mail sent successfully."));
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: error.success || false,
      message: error.message || "Internal server error",
    });
  }
};

const loginOtpVerify = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp)
      throw new ApiError(400, "Email address and OTP required");

    const user = await prisma.user.findFirst({
      where: { email: `${email}`.toLowerCase() },
    });

    if (!user) throw new ApiError(404, "User not found");
    const role = user.role;
    if (user.otp !== otp || user.otp_expiry < new Date())
      throw new ApiError(400, "OTP mismatch or expired.");
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    if (!token)
      throw new ApiError(500, "Something went wrong. Token not generated.");
    await prisma.user.update({
      where: { id: user.id },
      data: { otp: null, otp_expiry: null },
    });
    res
      .status(200)
      .json(new ApiResponse(200, { token, role }, "Login successful."));
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

const verifyRefreshToken = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      throw new ApiError(400, "Invalid login");
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      throw new ApiError(400, "Wrong token provided");
    }

    const user = await prisma.user.findFirst({
      where: { id: decodedToken.userId },
      select: {
        id: true,
        name: true,
        email: true,
        department: true,
        role: true,
        gender: true,
      },
    });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    return res.status(200).json(new ApiResponse(200, user, "Verified token"));
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      data: null,
      message: error.message || "Internal server error",
    });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const { role } = req.body;

    let include;

    if (role === "teacher") {
      include = {
        teacher: true,
      };
    } else if (role === "student") {
      include = {
        student: {
          include: {
            class: true,
          },
        },
      };
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: include,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Profile not found.",
      });
    }

    if (role === "teacher") {
      const { name, email, gender, department, created_at, updated_at } = user;
      const { teacher_id_no } = user.teacher;

      return res.status(200).json({
        success: true,
        data: {
          name,
          email,
          gender,
          department,
          role: "teacher",
          teacher_id_no,
          created_at,
          updated_at,
        },
      });
    }

    if (role === "student") {
      const { name, email, gender, department, created_at, updated_at } = user;
      const { reg_no, year, class: studentClass } = user.student;

      console.log(studentClass);

      return res.status(200).json({
        success: true,
        data: {
          name,
          email,
          gender,
          branch: studentClass.branch,
          class: {
            code: studentClass.code,
            semester: studentClass.semester,
          },
          department,
          role: "student",
          regNo: reg_no,
          year,
          created_at,
          updated_at,
        },
      });
    }
  } catch (err) {
    console.error("getUserProfile error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { loginOtpSend, loginOtpVerify, verifyRefreshToken, getUserProfile };
