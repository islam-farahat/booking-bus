/*
  Warnings:

  - You are about to drop the column `busNum` on the `Trips` table. All the data in the column will be lost.
  - You are about to drop the column `tickets` on the `Trips` table. All the data in the column will be lost.
  - The `seats` column on the `Trips` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `busNumber` to the `Trips` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trips" DROP COLUMN "busNum",
DROP COLUMN "tickets",
ADD COLUMN     "busNumber" TEXT NOT NULL,
ALTER COLUMN "date" SET DATA TYPE TEXT,
ALTER COLUMN "time" SET DATA TYPE TEXT,
DROP COLUMN "seats",
ADD COLUMN     "seats" BOOLEAN[];
