/*
  Warnings:

  - You are about to drop the column `Role` on the `role` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[role]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `role` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Role_Role_key` ON `role`;

-- AlterTable
ALTER TABLE `role` DROP COLUMN `Role`,
    ADD COLUMN `role` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Role_role_key` ON `Role`(`role`);
