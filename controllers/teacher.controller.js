import prisma from "../db/db.config.js";

const getSubjects = async (req, res) => {
  try {
    const { teacherId } = req.body;

    // Fetch all teacher-class-subject relationships in a single query
    const teacherClasses = await prisma.teacherClass.findMany({
      where: {
        teacher_id: teacherId,
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
    console.log(classesTaught);
    console.log(classesTaught[0].subjects);
  } catch (error) {
    console.error("Error fetching teacher classes and subjects:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};

export { getSubjects };
