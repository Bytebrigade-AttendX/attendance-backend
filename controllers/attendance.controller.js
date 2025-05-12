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

    // Fetch attendance record from DB
    const attendance = await prisma.attendance.findUnique({
      where: { id: attendanceId },
      select: {
        teacherLatitude: true,
        teacherLongitude: true,
        student_records: true,
      },
    });

    if (!attendance) {
      throw new ApiError(404, "Attendance record not found");
    }

    // Validate location
    const isPresentInRadius = validateLocation(
      parseFloat(attendance.teacherLatitude),
      parseFloat(attendance.teacherLongitude),
      parseFloat(studentLat),
      parseFloat(studentLon),
      20
    );

    if (!isPresentInRadius) {
      return res.status(403).json({
        message: "Student not within required range. Attendance not marked.",
      });
    }

    // Prepare updated student_records
    const updatedRecords = {
      ...attendance.student_records,
      [selectedUser]: { status: "present" },
    };

    // Update attendance in DB
    await prisma.attendance.update({
      where: { id: attendanceId },
      data: {
        student_records: updatedRecords,
      },
    });

    console.log("Attendance updated for student", selectedUser);

    return res.status(200).json({ message: "Marked present successfully" });
  } catch (error) {
    console.error("Error in getMarked:", error.message);
    return res.status(400).json({ error: error.message });
  }
};

const endSession = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      throw new ApiError(400, "Invalid login");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const teacherId = decodedToken.userId;

    if (!teacherId) {
      throw new ApiError(400, "Wrong token provided");
    }

    // Get the latest attendance session for this teacher
    const attendanceRecord = await prisma.attendance.findFirst({
      where: { teacher_id: teacherId },
      orderBy: { created_at: "desc" }, // optional: choose the latest session
      select: {
        id: true,
        student_records: true,
      },
    });

    if (!attendanceRecord) {
      throw new ApiError(404, "Attendance record not found");
    }

    const studentRecords = attendanceRecord.student_records || {};
    const studentIds = Object.keys(studentRecords);

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
      status: studentRecords[student.id]?.status || "absent",
    }));

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { combinedList, attendanceId: attendanceRecord.id },
          "Records sent successfully"
        )
      );
  } catch (error) {
    console.error("Error in endSession:", error.message);
    return res.status(400).json({ error: error.message });
  }
};

const storeRecords = async (req, res) => {
  try {
    const { attendanceRecords, attendanceId } = req.body;

    // Check for required fields
    if (!attendanceRecords || !attendanceId) {
      throw new ApiError(400, "attendanceRecords or attendanceId missing");
    }

    // Convert to studentRecords format (ID: {status})
    const studentRecords = {};
    for (const record of attendanceRecords) {
      studentRecords[record.id] = {
        status: record.status, // mark each student as present/absent
      };
    }

    // Update the attendance record in the database with the new student records
    const updatedAttendance = await prisma.attendance.update({
      where: {
        id: attendanceId, // Match attendance by ID
      },
      data: {
        student_records: studentRecords, // Update the student_records JSON field
      },
    });

    // Send response with updated attendance
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updatedAttendance,
          "Attendance records updated successfully"
        )
      );
  } catch (err) {
    console.error("Error updating attendance:", err);
    return res.status(500).json(new ApiError(500, "Internal Server Error"));
  }
};

// const getActiveattendance = async (req, res) => {
//   const { token } = req.body;

//   try {
//     if (!token) {
//       throw new ApiError(400, "Invalid login");
//     }

//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//     const studentId = decodedToken.userId;

//     if (!studentId) {
//       throw new ApiError(400, "Wrong token provided");
//     }

//     const __filename = fileURLToPath(import.meta.url);
//     const __dirname = path.dirname(__filename);
//     const filePath = path.resolve(__dirname, "../records.temp.json");

//     const rawData = await fs.readFile(filePath, "utf-8");
//     const records = rawData ? JSON.parse(rawData) : [];

//     // Find the attendance record where the student is present
//     const matchingRecord = records.find((record) =>
//       Object.keys(record.studentRecords).includes(studentId)
//     );

//     if (!matchingRecord) {
//       return res
//         .status(404)
//         .json(new ApiResponse(404, null, "No active attendance session found"));
//     }

//     const attendanceId = matchingRecord.attendanceId;

//     const attendance = await prisma.attendance.findUnique({
//       where: {
//         id: attendanceId,
//       },
//       select: {
//         session_end: true,
//         class: {
//           select: {
//             branch: true,
//             semester: true,
//           },
//         },
//         subject: {
//           select: {
//             name: true,
//           },
//         },
//         teacher: {
//           select: {
//             user: {
//               select: {
//                 name: true,
//               },
//             },
//           },
//         },
//       },
//     });

//     if (!attendance) {
//       return res
//         .status(404)
//         .json(new ApiResponse(404, null, "Attendance record not found"));
//     }

//     const options = {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//       timeZoneName: "short",
//     };

//     const endTime = new Date(attendance.session_end).toLocaleString(
//       "en-IN",
//       options
//     );
//     console.log(formatted);

//     // Extract necessary details
//     const responseData = {
//       attendanceId: attendanceId,
//       teacherName: attendance.teacher.user.name,
//       branch: attendance.class.branch,
//       semester: attendance.class.semester,
//       subjectName: attendance.subject.name,
//       endsAt: endTime,
//     };

//     return res
//       .status(200)
//       .json(
//         new ApiResponse(200, responseData, "Active attendance session info")
//       );
//   } catch (error) {
//     return res
//       .status(400)
//       .json(new ApiResponse(400, null, error.message || "An error occurred"));
//   }
// };

const getActiveattendance = async (req, res) => {
  const { token } = req.body;

  try {
    if (!token) {
      throw new ApiError(400, "Invalid login");
    }

    // Decode the token and get the studentId
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const studentId = decodedToken.userId;

    if (!studentId) {
      throw new ApiError(400, "Wrong token provided");
    }

    // Get the current time
    const currentTime = new Date();

    // Find the active attendance record for the student where the session has not ended
    const attendance = await prisma.attendance.findFirst({
      where: {
        student_records: {
          path: [studentId],
          equals: { status: "present" },
        },
        session_end: {
          gt: currentTime, // The session should not have ended yet
        },
      },
      select: {
        id: true,
        session_end: true,
        class: {
          select: {
            branch: true,
            semester: true,
          },
        },
        subject: {
          select: {
            name: true,
          },
        },
        teacher: {
          select: {
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    if (!attendance) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "No active attendance session found"));
    }

    // Format session_end date
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };

    const endTime = new Date(attendance.session_end).toLocaleString(
      "en-IN",
      options
    );

    // Prepare response data
    const responseData = {
      attendanceId: attendance.id,
      teacherName: attendance.teacher.user.name,
      branch: attendance.class.branch,
      semester: attendance.class.semester,
      subjectName: attendance.subject.name,
      endsAt: endTime,
    };

    return res
      .status(200)
      .json(
        new ApiResponse(200, responseData, "Active attendance session info")
      );
  } catch (error) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, error.message || "An error occurred"));
  }
};

// TODO: Update records to be added

export {
  startSession,
  getMarked,
  storeRecords,
  endSession,
  getActiveattendance,
};
