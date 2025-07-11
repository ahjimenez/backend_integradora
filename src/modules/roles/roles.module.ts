import { Module } from '@nestjs/common';
import { rolesController } from './infraestructure/controllers/roles.controller';
import { CreateRoleUseCase } from './application/uses-cases/create-role.use-case';
import { GetRoleUseCase } from './application/uses-cases/get-role.use-case';
import { RoleRepository } from './domain/interfaces/role-repository.interface';
import { ConcreteRoleRepository } from './domain/interfaces/role-repository.interface';
import { RolesController } from './roles.controller';
import { PrismaRolesRepository } from './infraestructure/repositories/prisma-roles.repository';
import { PrismaService } from '../../core/databases/prisma.service';

@Module({
  
  providers: [
    PrismaService,
    {
      provide: RoleRepository,
      useClass: PrismaRolesRepository,    
    },
    CreateRoleUseCase,
    GetRoleUseCase, 
  ],
  controllers: [rolesController, RolesController],
})

export class RolesModule {}
