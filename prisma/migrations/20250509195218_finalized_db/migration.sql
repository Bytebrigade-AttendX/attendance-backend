-- AlterTable
ALTER TABLE "Attendance" ALTER COLUMN "session_end" DROP NOT NULL,
ALTER COLUMN "session_start" DROP NOT NULL;
