import { Injectable } from '@nestjs/common';
import { RoleRepository } from '../../infraestructure/repositories/role-repository.interface';
import { PrismaService } from 'src/core/databases/prisma.service';
import { Role } from '../../domain/entities/role';
import { CreateRoleDto } from '../dtos/create-role.dto';

@Injectable()
export class CreateRoleUseCase {

  constructor(private readonly roleRepository: RoleRepository) {}
   async execute(createRoleDto: CreateRoleDto): Promise<Role | null> {
    const role = new Role(
      '', 
      createRoleDto.role, 
      new Date(), 
      new Date()
    );
    return this.roleRepository.create(role);
  }
}