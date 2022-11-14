/*
  Warnings:

  - You are about to drop the column `bookerId` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_bookerId_fkey`;

-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `bookerId`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
