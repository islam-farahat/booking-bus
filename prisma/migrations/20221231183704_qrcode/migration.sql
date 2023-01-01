/*
  Warnings:

  - The `terms` column on the `TicketDetails` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `vatSerial` to the `TicketDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TicketDetails" ADD COLUMN     "vatSerial" TEXT NOT NULL,
DROP COLUMN "terms",
ADD COLUMN     "terms" TEXT[];
