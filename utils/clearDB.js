import prisma from "../db/db.config.js";

async function clearDatabase() {
  // Delete in reverse order of dependencies
  await prisma.attendance.deleteMany();
  await prisma.teacherClass.deleteMany();
  await prisma.classSubject.deleteMany();
  await prisma.student.deleteMany();
  await prisma.teacher.deleteMany();
  await prisma.user.deleteMany();
  await prisma.class.deleteMany();
  await prisma.subject.deleteMany();

  console.log("Database cleared.");
}

clearDatabase();
