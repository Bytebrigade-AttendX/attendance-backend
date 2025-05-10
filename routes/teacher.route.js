import { Router } from "express";
import { getSubjects } from "../controllers/teacher.controller.js";

const teacherRouter = Router();

teacherRouter.route("/getSubjects").post(getSubjects);

export default teacherRouter;
