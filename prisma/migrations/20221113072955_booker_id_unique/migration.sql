/*
  Warnings:

  - A unique constraint covering the columns `[bookerId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Booking_bookerId_key` ON `Booking`(`bookerId`);
