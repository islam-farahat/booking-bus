/*
  Warnings:

  - You are about to drop the `Bus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `trip` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bus" DROP CONSTRAINT "Bus_tripId_fkey";

-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_fromId_fkey";

-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_toId_fkey";

-- DropTable
DROP TABLE "Bus";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "trip";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Buses" (
    "id" SERIAL NOT NULL,
    "busNum" TEXT NOT NULL,
    "tripId" INTEGER,

    CONSTRAINT "Buses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trips" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "trips_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Buses" ADD CONSTRAINT "Buses_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "trips"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "trips"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_toId_fkey" FOREIGN KEY ("toId") REFERENCES "trips"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
