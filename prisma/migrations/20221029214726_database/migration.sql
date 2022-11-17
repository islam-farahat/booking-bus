-- CreateTable
CREATE TABLE "Bus" (
    "id" SERIAL NOT NULL,
    "busNum" TEXT NOT NULL,
    "tripId" INTEGER,

    CONSTRAINT "Bus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "cityName" TEXT NOT NULL,
    "fromId" INTEGER NOT NULL,
    "toId" INTEGER NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trip" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "trip_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bus" ADD CONSTRAINT "Bus_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "trip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "trip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_toId_fkey" FOREIGN KEY ("toId") REFERENCES "trip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
