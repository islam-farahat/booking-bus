/*
  Warnings:

  - Added the required column `date` to the `Invoices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoices" ADD COLUMN     "complete" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "date" DATE NOT NULL;
