-- CreateTable
CREATE TABLE `Hotel` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `host` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `admin` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `numOfGuest` INTEGER NOT NULL,

    UNIQUE INDEX `Hotel_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL,
    `contact` VARCHAR(191) NOT NULL,
    `walletId` VARCHAR(191) NOT NULL,
    `income` INTEGER NOT NULL,

    UNIQUE INDEX `User_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Booking` (
    `bookingId` VARCHAR(191) NOT NULL,
    `bookerId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Booking_bookingId_key`(`bookingId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_bookerId_fkey` FOREIGN KEY (`bookerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
