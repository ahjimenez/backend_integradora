import { Injectable } from "@nestjs/common";
import { Role } from "../../domain/entities/role";
import { RoleRepository } from "../../infraestructure/repositories/role-repository.interface";
import { PrismaService } from "src/core/databases/prisma.service";

@Injectable()
export class GetRoleUseCase {
    async executeById(id: string): Promise<Role | null> {
        return this.roleRepository.getById(id);
    }
    constructor(private readonly roleRepository: RoleRepository) {}
    async execute(): Promise<Role[]> {
        return this.roleRepository.getAll();
    }
}