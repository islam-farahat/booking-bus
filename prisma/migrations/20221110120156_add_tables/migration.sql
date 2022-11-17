/*
  Warnings:

  - You are about to drop the `trips` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Buses" DROP CONSTRAINT "Buses_tripId_fkey";

-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_fromId_fkey";

-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_toId_fkey";

-- DropTable
DROP TABLE "trips";

-- CreateTable
CREATE TABLE "Trips" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "price" TEXT NOT NULL,
    "seatsCount" INTEGER NOT NULL,
    "seats" BOOLEAN[],

    CONSTRAINT "Trips_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tickets" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "idNumber" INTEGER NOT NULL,
    "busNumber" INTEGER NOT NULL,
    "chairNumber" INTEGER NOT NULL,
    "tripId" INTEGER,

    CONSTRAINT "Tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TicketDetails" (
    "id" SERIAL NOT NULL,
    "license" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,

    CONSTRAINT "TicketDetails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Buses" ADD CONSTRAINT "Buses_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trips"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "Trips"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_toId_fkey" FOREIGN KEY ("toId") REFERENCES "Trips"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trips"("id") ON DELETE SET NULL ON UPDATE CASCADE;
