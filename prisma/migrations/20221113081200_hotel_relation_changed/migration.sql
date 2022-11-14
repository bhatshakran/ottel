-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_bookingId_fkey`;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
