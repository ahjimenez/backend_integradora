-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(128) NOT NULL,
    `apellido_paterno` VARCHAR(128) NOT NULL,
    `apellido_materno` VARCHAR(128) NOT NULL,
    `correo_electronico` VARCHAR(100) NOT NULL,
    `password` VARCHAR(60) NOT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
