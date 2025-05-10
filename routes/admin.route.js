import { Router } from "express";
import { addTeacher } from "../controllers/admin.controller.js";

const adminRouter = Router();
const test = (req,res) => { 
    res.json("working")
}
adminRouter.route("/addTeacher").post(addTeacher);
adminRouter.route("/test").get((req, res) => {
    res.status(200).json({
      success: true,
      message: "Admin test route is working!"
    });
  }
)
export default adminRouter;
