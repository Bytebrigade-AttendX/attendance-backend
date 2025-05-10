/*
  Warnings:

  - You are about to drop the column `is_suspended` on the `Teacher` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Attendance" ALTER COLUMN "created_at" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "created_at" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "is_suspended" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "role" VARCHAR(255) NOT NULL DEFAULT 'student',
ALTER COLUMN "created_at" SET DEFAULT now(),
ALTER COLUMN "updated_at" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Subject" ALTER COLUMN "created_at" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "is_suspended",
ALTER COLUMN "created_at" SET DEFAULT now(),
ALTER COLUMN "updated_at" SET DEFAULT now();
