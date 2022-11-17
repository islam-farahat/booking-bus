/*
  Warnings:

  - Changed the type of `tripId` on the `Invoices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Invoices" DROP COLUMN "tripId",
ADD COLUMN     "tripId" INTEGER NOT NULL;
