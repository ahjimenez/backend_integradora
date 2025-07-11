import { Injectable } from "@nestjs/common";
import { RoleRepository } from "../../domain/interfaces/role-repository.interface";
import { Role } from "../../domain/entities/role";
import { PrismaService } from "../../../../core/databases/prisma.service";
import { roleMapper } from "../mappers/role.mapper";

/*
@Injectable()
export class PrismaRolesRepository implements RoleRepository {
    async create(role: Role): Promise<Role | null> {
        const { id, ...roleData } = role;
        const newRole = await this.prismaService.role.create({
    data: roleData, // Prisma generará automáticamente el id
  });
        return roleMapper.toDomain(newRole);
    }

    constructor(private readonly prismaService: PrismaService) {
    }
    getall(): Promise<Role[]> {
        throw new Error("Method not implemented.");
    }
     async getAll(): Promise<Role[]> {
        const roles = await this.prismaService.role.findMany();
        return roles.map(roleMapper.toDomain);
    }
    async getById(id: string): Promise<Role | null> {
        const role = await this.prismaService.role.findUnique({
            where: { id },
        });
        return role ? roleMapper.toDomain(role) : null;
    }
}

export { RoleRepository }; */
@Injectable()
export class PrismaRolesRepository implements RoleRepository {

  constructor(private readonly prismaService: PrismaService) {}
    getall(): Promise<Role[]> {
        throw new Error("Method not implemented.");
    }

  async create(role: Role): Promise<Role | null> {
  
    const newRole = await this.prismaService.role.create({
      data: {
        ...role,
        id: undefined, // dejamos que Prisma genere su ID
      }
    });

    return roleMapper.toDomain(newRole);
  }

  async getAll(): Promise<Role[]> {
    const role = await this.prismaService.role.findMany();

    return role.map(roleMapper.toDomain);
  }

  async getById(id: string): Promise<Role | null> {
    const role = await this.prismaService.role.findUnique({
      where: {
        id
      }
    });

    return role ? roleMapper.toDomain(role) : null;
  }
}