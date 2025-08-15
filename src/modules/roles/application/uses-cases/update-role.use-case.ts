import { Injectable } from '@nestjs/common';
import { RoleRepository } from '../../infraestructure/repositories/role-repository.interface';
import { UpdateRoleDto } from '../dtos/update-role.dto';
import { Role } from '../../domain/entities/role';
import { PrismaService } from "src/core/databases/prisma.service";


@Injectable()
export class UpdateRoleUseCase {
  constructor(private readonly roleRepository: RoleRepository) {}

  async update(id: string, roleData: Partial<Role>): Promise<Role> {
    return this.roleRepository.update(id, roleData);
  }
}
