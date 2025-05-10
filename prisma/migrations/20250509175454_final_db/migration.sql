/*
  Warnings:

  - You are about to drop the `AttendanceRecord` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `student_records` to the `Attendance` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AttendanceRecord" DROP CONSTRAINT "AttendanceRecord_attendance_id_fkey";

-- DropForeignKey
ALTER TABLE "AttendanceRecord" DROP CONSTRAINT "AttendanceRecord_student_id_fkey";

-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "student_records" JSONB NOT NULL;

-- DropTable
DROP TABLE "AttendanceRecord";
