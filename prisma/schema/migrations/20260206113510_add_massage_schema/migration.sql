-- CreateEnum
CREATE TYPE "MassageStatus" AS ENUM ('MASSAGE_SEND', 'MASSAGE_RECEIVED', 'MASSAGE_READ');

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "brand" TEXT,
ADD COLUMN     "category" TEXT;

-- CreateTable
CREATE TABLE "massages" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT,
    "adminId" TEXT,
    "massageStatus" "MassageStatus" NOT NULL DEFAULT 'MASSAGE_SEND',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "massages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "massages" ADD CONSTRAINT "massages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "massages" ADD CONSTRAINT "massages_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admins"("id") ON DELETE SET NULL ON UPDATE CASCADE;
