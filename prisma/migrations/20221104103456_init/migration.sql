/*
  Warnings:

  - Added the required column `description` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Hotel` ADD COLUMN `description` VARCHAR(191) NOT NULL;
