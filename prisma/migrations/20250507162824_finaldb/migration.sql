/*
  Warnings:

  - You are about to drop the column `change_password_expiry` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `change_password_token` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `department` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `is_suspended` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `password_hash` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `change_password_expiry` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `change_password_token` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `department` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `password_hash` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Teacher` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('student', 'teacher', 'admin');

-- AlterEnum
ALTER TYPE "Department" ADD VALUE 'Other';

-- DropIndex
DROP INDEX "Student_email_key";

-- DropIndex
DROP INDEX "Teacher_email_key";

-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "AttendanceRecord" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "change_password_expiry",
DROP COLUMN "change_password_token",
DROP COLUMN "created_at",
DROP COLUMN "department",
DROP COLUMN "email",
DROP COLUMN "gender",
DROP COLUMN "is_suspended",
DROP COLUMN "name",
DROP COLUMN "password_hash",
DROP COLUMN "role",
DROP COLUMN "updated_at",
ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "change_password_expiry",
DROP COLUMN "change_password_token",
DROP COLUMN "created_at",
DROP COLUMN "department",
DROP COLUMN "email",
DROP COLUMN "gender",
DROP COLUMN "name",
DROP COLUMN "password_hash",
DROP COLUMN "role",
DROP COLUMN "updated_at",
ALTER COLUMN "id" DROP DEFAULT;

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "otp" TEXT NOT NULL,
    "is_suspended" BOOLEAN NOT NULL DEFAULT false,
    "department" "Department" NOT NULL,
    "role" "Role" NOT NULL,
    "gender" "Gender" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
