/*
  Warnings:

  - A unique constraint covering the columns `[hotelId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hotelId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Booking` ADD COLUMN `hotelId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Booking_hotelId_key` ON `Booking`(`hotelId`);
