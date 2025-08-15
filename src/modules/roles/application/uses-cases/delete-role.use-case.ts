import { Injectable } from "@nestjs/common";
import { Role } from "../../domain/entities/role";
import { RoleRepository } from "../../infraestructure/repositories/role-repository.interface";
import { PrismaService } from "src/core/databases/prisma.service";

@Injectable()
export class DeleteRoleUseCase {
   constructor(private readonly prisma: PrismaService) {}

  async delete(id: string): Promise<void> {
    await this.prisma.role.delete({
      where: { id },
    });
  }
}
