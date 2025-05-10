import prisma from "../db/db.config.js";
import bcryptjs from "bcryptjs";

const addStudent = async (req, res) => {};

const addTeacher = async (req, res) => {
  try {
    const { name, email, password, department, gender, teacherIdNo } = req.body;

    if (
      !name ||
      !email ||
      !password ||
      !department ||
      !gender ||
      !teacherIdNo
    ) {
      return res
        .status(400)
        .json({ message: "fields missing", successful: false });
    }

    const salt = await bcryptjs.genSalt(10);
    const passwordHash = await bcryptjs.hash(password, salt);

    const newTeacher = await prisma.teacher.create({
      data: {
        name: name,
        email: email,
        password_hash: passwordHash,
        department: department,
        gender: gender,
        teacher_id_no: teacherIdNo,
        role: "teacher",
        change_password_token: null,
        change_password_expiry: null,
      },
    });
    console.log("Teacher Created : ", newTeacher);
    return res.status(200).json({ message: "teacher added successfully" });
  } catch (error) {
    console.error("Error creating teacher:", error);
    throw error;
  }
};

const addClasses = async (req, res) => {
  try {
    const { code, dept, year } = req.body;
    const newClass = await prisma.class.create({
      data: {
        code: code,
        dept: dept,
        year: year,
      },
    });
    console.log("Inserted class:", newClass);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", successful: false });
  }
};

export { addTeacher, addStudent, addClasses };
