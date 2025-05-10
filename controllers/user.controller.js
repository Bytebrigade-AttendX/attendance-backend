import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { sendMail } from "../utils/mailer.js";
import prisma from "../db/db.config.js";
import jwt from "jsonwebtoken";
const loginOtpSend = async (req, res) => {
  const email = req.body.email;
  if (!email) throw new ApiError(400, "Email address required.");
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (!user) throw new ApiError(404, "User not found.");
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await prisma.user.update({
    where: { id: user.id },
    data: { otp, otp_expiry: new Date(Date.now() + 5 * 60 * 1000) },
  });
  const mailed = await sendMail(email, otp);
  if (!mailed)
    throw new ApiError(500, "Something went wrong. OTP mail not sent.");
  res.status(200).json(new ApiResponse(200, {}, "OTP mail sent successfully."));
};
const loginOtpVerify = async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp)
    throw new ApiError(400, "Email address and OTP required.");
  const user = await prisma.user.findFirst({
    where: { email: email },
  });
  console.log(email, otp);
  if (!user) throw new ApiError(404, "User not found.");
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
    console.log(error.message);
  }
};

const getUser = async (req, res) => {
  const { userId } = req.body;
};
export { loginOtpSend, loginOtpVerify, verifyRefreshToken };
