/*
  Warnings:

  - You are about to drop the column `dept` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Class` table. All the data in the column will be lost.
  - Added the required column `branch` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `semester` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Semester" AS ENUM ('I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII');

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "dept",
DROP COLUMN "year",
ADD COLUMN     "branch" "Department" NOT NULL,
ADD COLUMN     "semester" "Semester" NOT NULL;
