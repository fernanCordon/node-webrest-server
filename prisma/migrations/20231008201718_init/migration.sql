-- CreateTable
CREATE TABLE "actio" (
    "id" SERIAL NOT NULL,
    "descriptio" VARCHAR NOT NULL,
    "completumEst" TIMESTAMP,

    CONSTRAINT "actio_pkey" PRIMARY KEY ("id")
);
