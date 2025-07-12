/*
  Warnings:

  - You are about to drop the `estimate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `estimate`;

-- CreateTable
CREATE TABLE `Properties` (
    `id` VARCHAR(191) NOT NULL,
    `property_name` VARCHAR(191) NOT NULL,
    `manager_name` VARCHAR(191) NOT NULL,
    `last_name_mgr` VARCHAR(191) NOT NULL,
    `id_client` VARCHAR(191) NOT NULL,
    `phone` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cc_email` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `zip` INTEGER NOT NULL,
    `invoice_processing` VARCHAR(191) NOT NULL,
    `territory` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
