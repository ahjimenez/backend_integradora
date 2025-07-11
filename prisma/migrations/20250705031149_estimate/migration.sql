-- CreateTable
CREATE TABLE `Estimate` (
    `id` VARCHAR(191) NOT NULL,
    `id_property` VARCHAR(64) NOT NULL,
    `send_date` DATETIME(6) NOT NULL,
    `estimate_number` VARCHAR(64) NOT NULL,
    `expiration_date` DATETIME(6) NOT NULL,
    `acceptation_date` DATETIME(6) NOT NULL,
    `id_user` VARCHAR(64) NOT NULL,
    `service_type` VARCHAR(64) NOT NULL,
    `description` VARCHAR(64) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `amount` FLOAT NOT NULL,
    `tax_included` BOOLEAN NOT NULL,
    `subtotal` FLOAT NOT NULL,
    `tax_amount` FLOAT NOT NULL,
    `total` FLOAT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;