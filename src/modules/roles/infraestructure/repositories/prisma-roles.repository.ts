import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/databases/prisma.service';
import { RoleRepository } from './role-repository.interface';
import { Role } from '../../domain/entities/role';

function mapToEntity(data: any): Role {
  return new Role(data.id, data.role, data.createdAt, data.updatedAt);
}
@Injectable()
export class PrismaRolesRepository implements RoleRepository {
  constructor(private readonly prisma: PrismaService) {}

 async create(role: Role): Promise<Role | null> {
  const created = await this.prisma.role.create({ data: { ...role,
    id: undefined,
   } });
  return mapToEntity(created);
}

async getAll(): Promise<Role[]> {
  const roles = await this.prisma.role.findMany();
  return roles.map(mapToEntity);
}

async getById(id: string): Promise<Role | null> {
  const found = await this.prisma.role.findUnique({ where: { id } });
  return found ? mapToEntity(found) : null;
}

async update(id: string, roleData: Partial<Role>): Promise<Role> {
  const updated = await this.prisma.role.update({ where: { id }, data: roleData });
  return mapToEntity(updated);
}
async delete(id: string): Promise<void> {
  await this.prisma.role.delete({ where: { id } });
}
}