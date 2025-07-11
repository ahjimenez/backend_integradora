import { Injectable } from "@nestjs/common";
import { Role } from "../../domain/entities/role";
import { RoleRepository } from "../../domain/interfaces/role-repository.interface";

@Injectable()
export class GetRoleUseCase {
    constructor(private readonly roleRepository: RoleRepository) {}
    async execute(): Promise<Role[]> {
        return this.roleRepository.getall();
    }
}