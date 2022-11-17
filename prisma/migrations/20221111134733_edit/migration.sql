/*
  Warnings:

  - You are about to drop the column `form` on the `Trips` table. All the data in the column will be lost.
  - Added the required column `from` to the `Trips` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trips" DROP COLUMN "form",
ADD COLUMN     "from" TEXT NOT NULL;
