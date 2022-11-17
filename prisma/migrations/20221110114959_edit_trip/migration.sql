/*
  Warnings:

  - Added the required column `seatsCount` to the `trips` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "trips" ADD COLUMN     "seats" BOOLEAN[],
ADD COLUMN     "seatsCount" INTEGER NOT NULL;
