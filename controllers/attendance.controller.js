import prisma from "../db/db.config.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";
import validateLocation from "../utils/checkLocation.js";
import { sendPushNotification } from "../utils/sendNotification.js";

const startSession = async (req, res) => {
  const {
    branch,
    semester,
    subjectName,
    token,
    teacherLatitude,
    teacherLongitude,
  } = req.body;
  try {
    let records = [];
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(__dirname, "../records.temp.json");
    const rawData = await fs.readFile(filePath, "utf-8");
    records = rawData ? JSON.parse(rawData) : [];

    if (!token) {
      throw new ApiError(400, "Invalid login");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const teacherId = decodedToken.userId;

    if (!teacherId) {
      throw new ApiError(400, "Wrong token provided");
    }

    // First, find the class that matches the branch and semester
    const classObj = await prisma.class.findFirst({
      where: {
        branch: branch,
        semester: semester,
        // Make sure this class has the given subject assigned
        subjects: {
          some: {
            subject: {
              name: subjectName,
            },
          },
        },
        // And the teacher teaches this subject for this class
        teacherClasses: {
          some: {
            teacher_id: teacherId,
            subject: {
              name: subjectName,
            },
          },
        },
      },
    });

    if (!classObj) {
      throw new Error("No matching class found with the given parameters");
    }

    // Now fetch all students from this class with their user information
    const students = await prisma.student.findMany({
      where: {
        class_id: classObj.id,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            gender: true,
            department: true,
            fcmToken: true,
          },
        },
      },
      orderBy: {
        reg_no: "asc", // Order by registration number
      },
    });

    const fcmTokens = students
      .map((student) => student.user.fcmToken)
      .filter((token) => token !== null && token !== undefined);

    console.log(fcmTokens);

    const sessionStart = new Date();
    const sessionEnd = new Date(sessionStart.getTime() + 3 * 60 * 1000); // 3 minutes later

    // Initialize student_records as JSON (e.g., empty or with default attendance status)
    const studentRecords = students.reduce((acc, student) => {
      acc[student.id] = { status: "absent" };
      return acc;
    }, {});

    console.log(studentRecords);

    const subject = await prisma.subject.findFirst({
      where: {
        name: subjectName,
      },
      select: {
        id: true,
      },
    });

    // Create the attendance record
    const attendance = await prisma.attendance.create({
      data: {
        class_id: classObj.id,
        subject_id: subject.id, // Use the subject ID from the class query
        teacher_id: teacherId,
        teacherLatitude: teacherLatitude,
        teacherLongitude: teacherLongitude,
        date: sessionStart,
        session_start: sessionStart,
        session_end: sessionEnd,
        student_records: studentRecords,
      },
    });

    records.push({
      attendanceId: attendance.id,
      teacherLatitude: attendance.teacherLatitude,
      teacherLongitude: attendance.teacherLongitude,
      teacherId: teacherId,
      studentRecords: studentRecords,
    });

    console.log(attendance);

    const data = { attendanceId: attendance.id };

    sendPushNotification(
      fcmTokens,
      "Kindly Mark your attendance",
      "Click this notification to mark your attendance",
      data
    );

    await fs.writeFile(filePath, JSON.stringify(records, null, 2));
    console.log("Attendance record updated successfully");

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          students,
          "Students fetched and attendance session started"
        )
      );
  } catch (error) {
    return res.status(400).json(new ApiResponse(400, null, error.message));
  }
};

const getMarked = async (req, res) => {
  try {
    const { attendanceId, token, studentLat, studentLon } = req.body;

    if (!token) {
      throw new ApiError(400, "Invalid login");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const selectedUser = decodedToken.userId;

    if (!selectedUser) {
      throw new ApiError(400, "Wrong token provided");
    }

    const user = await prisma.user.findFirst({
      where: { id: selectedUser },
      select: { id: true },
    });

    if (!user) {
      throw new ApiError(400, "User not found");
    }

    // Read records from file
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(__dirname, "../records.temp.json");
    const rawData = await fs.readFile(filePath, "utf-8");
    const records = rawData ? JSON.parse(rawData) : [];

    // Find the correct attendance record
    const attendanceRecord = records.find(
      (record) => record.attendanceId === attendanceId
    );

    if (!attendanceRecord) {
      throw new ApiError(404, "Attendance record not found");
    }

    // Validate student's location
    const isPresentInRadius = validateLocation(
      parseFloat(attendanceRecord.teacherLatitude),
      parseFloat(attendanceRecord.teacherLongitude),
      parseFloat(studentLat),
      parseFloat(studentLon),
      20
    );

    if (!isPresentInRadius) {
      return res.status(403).json({
        message: "Student not within required range. Attendance not marked.",
      });
    }

    // Check if student exists in studentRecords and update status
    if (
      attendanceRecord.studentRecords &&
      attendanceRecord.studentRecords[selectedUser]
    ) {
      attendanceRecord.studentRecords[selectedUser].status = "present";
    } else {
      // Optional: Add the student if not already in record
      attendanceRecord.studentRecords[selectedUser] = { status: "present" };
    }

    // Write updated data back to the file
    await fs.writeFile(filePath, JSON.stringify(records, null, 2));
    console.log("Attendance updated for student", selectedUser);

    return res.status(200).json({ message: "Marked present successfully" });
  } catch (error) {
    console.error("Error in getMarked:", error.message);
    return res.status(400).json({ error: error.message });
  }
};

const endSession = async (req, res) => {
  const { token } = req.body;
  if (!token) {
    throw new ApiError(400, "Invalid login");
  }

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  const teacherId = decodedToken.userId;

  if (!teacherId) {
    throw new ApiError(400, "Wrong token provided");
  }

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, "../records.temp.json");
  const rawData = await fs.readFile(filePath, "utf-8");
  const records = rawData ? JSON.parse(rawData) : [];

  const attendanceRecord = records.find(
    (record) => record.teacherId === teacherId
  );

  if (!attendanceRecord) {
    throw new ApiError(404, "Attendance record not found");
  }

  const response = attendanceRecord.studentRecords;

  const studentIds = Object.keys(attendanceRecord.studentRecords);
  // console.log(studentIds);
  // const studentsWithNames = await prisma.student.findMany({
  //   where: {
  //     id: {
  //       in: studentIds,
  //     },
  //   },
  //   include: {
  //     user: {
  //       select: {
  //         name: true,
  //       },
  //     },
  //   },
  // });

  // const namesList = studentsWithNames.map((student) => ({
  //   id: student.id,
  //   name: student.user.name,
  // }));

  // const combinedList = namesList.map((student) => ({
  //   id: student.id,
  //   name: student.name,
  //   status: response[student.id]?.status || "absent", // default to 'absent' if missing
  // }));

  const studentsWithStatus = await prisma.student.findMany({
    where: {
      id: {
        in: studentIds,
      },
    },
    select: {
      id: true,
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  const combinedList = studentsWithStatus.map((student) => ({
    id: student.id,
    name: student.user.name,
    status: response[student.id]?.status || "absent",
  }));

  // console.log(combinedList);
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { combinedList, attendanceId: attendanceRecord.attendanceId },
        "Records sent successfully"
      )
    );
};

const storeRecords = async (req, res) => {
  try {
    const { attendanceRecords, attendanceId } = req.body;

    if (!attendanceRecords || !attendanceId) {
      throw new ApiError(400, "attendanceRecords or attendanceId missing");
    }
    console.log(attendanceRecords);
    console.log(attendanceId);
    // Convert to studentRecords format
    const studentRecords = {};
    for (const record of attendanceRecords) {
      studentRecords[record.id] = {
        status: record.status,
      };
    }

    // Load the JSON file
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(__dirname, "../records.temp.json");

    const rawData = await fs.readFile(filePath, "utf-8");
    const records = rawData ? JSON.parse(rawData) : [];

    const attendance = await prisma.attendance.update({
      where: {
        id: attendanceId, // Match based on the attendanceId
      },
      data: {
        student_records: studentRecords, // Update student_records
      },
    });

    const updatedRecords = records.filter(
      (record) => record.attendanceId !== attendanceId
    );

    await fs.writeFile(
      filePath,
      JSON.stringify(updatedRecords, null, 2),
      "utf-8"
    );

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          attendance,
          "Attendance records updated successfully"
        )
      );
  } catch (err) {
    console.error(err);
    return res.status(500).json(new ApiError(500, "Internal Server Error"));
  }
};

// TODO: Update records to be added

export { startSession, getMarked, storeRecords, endSession };
