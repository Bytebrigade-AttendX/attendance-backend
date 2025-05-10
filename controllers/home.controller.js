import prisma from "../db/db.config.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";

const getUserInfo = async (req, res) => {
  try {
    const { token, role } = req.body;
    if (role == "teacher") {
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
          teacher: true,
        },
      });
      if (!user) {
        throw new ApiError(404, "User not found");
      }

      const teacherClasses = await prisma.teacherClass.findMany({
        where: {
          teacher_id: decodedToken.userId,
        },
        include: {
          class: true, // Include full class information
          subject: true, // Include full subject information
        },
      });

      // Group the results by class
      const classMap = new Map();

      for (const record of teacherClasses) {
        const classId = record.class_id;

        // If we haven't seen this class yet, initialize it in our map
        if (!classMap.has(classId)) {
          classMap.set(classId, {
            classInfo: record.class,
            subjects: [],
          });
        }

        // Add this subject to the class's subjects array
        classMap.get(classId).subjects.push(record.subject);
      }

      // Convert the map to the desired array format
      const classesTaught = Array.from(classMap.values());

      // Return the result
      return res
        .status(200)
        .json(new ApiResponse(200, { user, classesTaught }, "Verified token"));
    } else {
    }
  } catch (error) {
    console.log(error.message);
  }
};

export { getUserInfo };
