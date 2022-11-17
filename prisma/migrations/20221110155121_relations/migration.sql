/*
  Warnings:

  - You are about to drop the column `tripId` on the `Buses` table. All the data in the column will be lost.
  - You are about to drop the column `fromId` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `toId` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `tripId` on the `Tickets` table. All the data in the column will be lost.
  - The `seats` column on the `Trips` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `busNum` to the `Trips` table without a default value. This is not possible if the table is not empty.
  - Added the required column `form` to the `Trips` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to` to the `Trips` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Buses" DROP CONSTRAINT "Buses_tripId_fkey";

-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_fromId_fkey";

-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_toId_fkey";

-- DropForeignKey
ALTER TABLE "Tickets" DROP CONSTRAINT "Tickets_tripId_fkey";

-- AlterTable
ALTER TABLE "Buses" DROP COLUMN "tripId";

-- AlterTable
ALTER TABLE "City" DROP COLUMN "fromId",
DROP COLUMN "toId";

-- AlterTable
ALTER TABLE "Tickets" DROP COLUMN "tripId";

-- AlterTable
ALTER TABLE "Trips" ADD COLUMN     "busNum" TEXT NOT NULL,
ADD COLUMN     "form" TEXT NOT NULL,
ADD COLUMN     "tickets" TEXT,
ADD COLUMN     "to" TEXT NOT NULL,
DROP COLUMN "seats",
ADD COLUMN     "seats" BOOLEAN;
