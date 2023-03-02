/*
  Warnings:

  - Added the required column `roomCost` to the `Invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomCount` to the `Invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomType` to the `Invoices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoices" ADD COLUMN     "roomCost" INTEGER NOT NULL,
ADD COLUMN     "roomCount" INTEGER NOT NULL,
ADD COLUMN     "roomType" TEXT NOT NULL;
