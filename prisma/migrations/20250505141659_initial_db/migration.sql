/*
  Warnings:

  - You are about to drop the column `is_suspended` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Attendance" ALTER COLUMN "created_at" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "created_at" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "is_suspended",
DROP COLUMN "role",
ALTER COLUMN "created_at" SET DEFAULT now(),
ALTER COLUMN "updated_at" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Subject" ALTER COLUMN "created_at" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Teacher" ALTER COLUMN "created_at" SET DEFAULT now(),
ALTER COLUMN "updated_at" SET DEFAULT now();
