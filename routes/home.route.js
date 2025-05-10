import { Router } from "express";
import { getUserInfo } from "../controllers/home.controller.js";

const homeRouter = Router();

homeRouter.route("/getUser").post(getUserInfo);

export default homeRouter;
