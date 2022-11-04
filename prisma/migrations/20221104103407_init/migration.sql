/*
  Warnings:

  - You are about to alter the column `price` on the `Hotel` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Hotel` MODIFY `price` INTEGER NOT NULL;
