/*
  Warnings:

  - Added the required column `subject` to the `massages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "massages" ADD COLUMN     "subject" TEXT NOT NULL;
