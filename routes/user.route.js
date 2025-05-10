import { Router } from "express";
import { loginOtpSend, loginOtpVerify, verifyRefreshToken } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route("/loginOtpSend").post(loginOtpSend);
userRouter.route("/loginOtpVerify").post(loginOtpVerify);
userRouter.route("/verifyToken").post(verifyRefreshToken);

export default userRouter;
