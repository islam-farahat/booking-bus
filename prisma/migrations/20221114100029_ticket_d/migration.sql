/*
  Warnings:

  - A unique constraint covering the columns `[branchName]` on the table `TicketDetails` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `branchName` to the `TicketDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terms` to the `TicketDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TicketDetails" ADD COLUMN     "branchName" TEXT NOT NULL,
ADD COLUMN     "terms" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TicketDetails_branchName_key" ON "TicketDetails"("branchName");
