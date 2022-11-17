-- CreateTable
CREATE TABLE "Invoices" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER[],
    "tripId" INTEGER[],

    CONSTRAINT "Invoices_pkey" PRIMARY KEY ("id")
);
