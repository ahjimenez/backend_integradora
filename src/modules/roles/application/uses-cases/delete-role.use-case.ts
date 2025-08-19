import { Injectable } from "@nestjs/common";
import { RoleRepository } from "../../infraestructure/repositories/role-repository.interface";

@Injectable()
export class DeleteRoleUseCase {
  constructor(private readonly roleRepository: RoleRepository) {}

  async execute(id: string): Promise<void> {
    return this.roleRepository.delete(id);
  }
}
