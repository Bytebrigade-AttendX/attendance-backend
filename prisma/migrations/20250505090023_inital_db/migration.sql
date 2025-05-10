-- CreateEnum
CREATE TYPE "Department" AS ENUM ('CSE', 'ECE', 'ME', 'EE');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'other');

-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('present', 'absent');

-- CreateTable
CREATE TABLE "Student" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" TEXT NOT NULL,
    "is_suspended" BOOLEAN NOT NULL DEFAULT false,
    "department" "Department" NOT NULL,
    "role" VARCHAR(255) NOT NULL DEFAULT 'student',
    "gender" "Gender" NOT NULL,
    "change_password_token" VARCHAR(255),
    "change_password_expiry" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT now(),
    "class_id" UUID NOT NULL,
    "year" INTEGER NOT NULL,
    "reg_no" VARCHAR(255) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" TEXT NOT NULL,
    "is_suspended" BOOLEAN NOT NULL DEFAULT false,
    "department" "Department" NOT NULL,
    "role" VARCHAR(255) NOT NULL DEFAULT 'teacher',
    "gender" "Gender" NOT NULL,
    "change_password_token" VARCHAR(255),
    "change_password_expiry" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT now(),
    "teacher_id_no" VARCHAR(255) NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "code" VARCHAR(50) NOT NULL,
    "dept" "Department" NOT NULL,
    "year" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT now(),

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "code" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT now(),

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassSubject" (
    "class_id" UUID NOT NULL,
    "subject_id" UUID NOT NULL,

    CONSTRAINT "ClassSubject_pkey" PRIMARY KEY ("class_id","subject_id")
);

-- CreateTable
CREATE TABLE "TeacherClass" (
    "teacher_id" UUID NOT NULL,
    "class_id" UUID NOT NULL,
    "subject_id" UUID NOT NULL,

    CONSTRAINT "TeacherClass_pkey" PRIMARY KEY ("teacher_id","class_id","subject_id")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "class_id" UUID NOT NULL,
    "subject_id" UUID NOT NULL,
    "teacher_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT now(),

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttendanceRecord" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "attendance_id" UUID NOT NULL,
    "student_id" UUID NOT NULL,
    "status" "AttendanceStatus" NOT NULL,

    CONSTRAINT "AttendanceRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_reg_no_key" ON "Student"("reg_no");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_teacher_id_no_key" ON "Teacher"("teacher_id_no");

-- CreateIndex
CREATE UNIQUE INDEX "Class_code_key" ON "Class"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_code_key" ON "Subject"("code");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassSubject" ADD CONSTRAINT "ClassSubject_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassSubject" ADD CONSTRAINT "ClassSubject_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherClass" ADD CONSTRAINT "TeacherClass_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherClass" ADD CONSTRAINT "TeacherClass_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherClass" ADD CONSTRAINT "TeacherClass_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceRecord" ADD CONSTRAINT "AttendanceRecord_attendance_id_fkey" FOREIGN KEY ("attendance_id") REFERENCES "Attendance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceRecord" ADD CONSTRAINT "AttendanceRecord_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
