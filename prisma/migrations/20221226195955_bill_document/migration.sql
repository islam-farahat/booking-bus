-- CreateTable
CREATE TABLE "Billdocument" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "buscount" INTEGER NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Billdocument_pkey" PRIMARY KEY ("id")
);
