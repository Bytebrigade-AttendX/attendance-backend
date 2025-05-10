/*
  Warnings:

  - Added the required column `session_end` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fcmToken` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "session_end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "session_start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "fcmToken" TEXT NOT NULL;
