/*
  Warnings:

  - You are about to alter the column `bookingId` on the `Booking` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `bookerId` on the `Booking` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `id` on the `Hotel` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_bookerId_fkey`;

-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_bookingId_fkey`;

-- DropForeignKey
ALTER TABLE `Hotel` DROP FOREIGN KEY `Hotel_id_fkey`;

-- AlterTable
ALTER TABLE `Booking` MODIFY `bookingId` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `bookerId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Hotel` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `User` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- AddForeignKey
ALTER TABLE `Hotel` ADD CONSTRAINT `Hotel_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_bookerId_fkey` FOREIGN KEY (`bookerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
