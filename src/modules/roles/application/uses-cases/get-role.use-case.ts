import { Injectable } from "@nestjs/common";
import { Role } from "../../domain/entities/role";
import { RoleRepository } from "../../infraestructure/repositories/role-repository.interface";
import { PrismaService } from "src/core/databases/prisma.service";

@Injectable()
export class GetRoleUseCase {
    executeById(id: string): Role | PromiseLike<Role | null> | null {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly roleRepository: RoleRepository) {}
    async execute(): Promise<Role[]> {
        return this.roleRepository.getAll();
    }
}