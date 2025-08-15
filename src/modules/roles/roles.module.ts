import { Module } from '@nestjs/common';
import { rolesController } from './infraestructure/controllers/roles.controller';
import { CreateRoleUseCase } from './application/uses-cases/create-role.use-case';
import { GetRoleUseCase } from './application/uses-cases/get-role.use-case';
import { UpdateRoleUseCase } from './application/uses-cases/update-role.use-case';
import { DeleteRoleUseCase } from './application/uses-cases/delete-role.use-case';
import { RoleRepository } from './infraestructure/repositories/role-repository.interface';
import { PrismaRolesRepository } from './infraestructure/repositories/prisma-roles.repository';
import { RolesController } from './roles.controller';
import { PrismaService } from '../../core/databases/prisma.service';

@Module({
  
  providers: [
    PrismaService,
    PrismaRolesRepository,
    CreateRoleUseCase,
    GetRoleUseCase,
    UpdateRoleUseCase,
    DeleteRoleUseCase,
    {
      provide: RoleRepository,
      useClass: PrismaRolesRepository,    
    },
    PrismaRolesRepository,
    CreateRoleUseCase,
    GetRoleUseCase,
    UpdateRoleUseCase,
    DeleteRoleUseCase 
  ],
  exports: [
    RoleRepository, 
    PrismaRolesRepository,
    CreateRoleUseCase,
    GetRoleUseCase,
    UpdateRoleUseCase,
    DeleteRoleUseCase
    ],
  controllers: [rolesController, RolesController],
})

export class RolesModule {}

console.log('🟢 RolesModule cargado correctamente');