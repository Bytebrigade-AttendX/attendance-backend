/*
  Warnings:

  - You are about to drop the column `fcmToken` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "fcmToken";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "fcmToken" TEXT;
