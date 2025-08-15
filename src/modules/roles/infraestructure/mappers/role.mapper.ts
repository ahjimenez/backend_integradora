import { Role } from "../../domain/entities/role";
import { Prisma, Role as PrismaRole } from "generated/prisma";

export class RoleMapper {
  /**
   * Convert Prisma Role model to Domain Role entity
   */
  static toDomain(prismaRole: PrismaRole): Role {
    return new Role(
      prismaRole.id,
      prismaRole.role,
      prismaRole.createdAt,
      prismaRole.updatedAt
    );
  }
  /**
   * Convert Domain Role entity to Prisma create input
   */
  static toCreateInput(role: Role): Prisma.RoleUncheckedCreateInput {
    return {
      id: role.id,
      role: role.Role,
      createdAt: role.createdAt ?? new Date(),
      updatedAt: role.updatedAt ?? new Date(),
    };
  }

  /**
   * Convert Domain Role entity to Prisma update input
   */
  static toUpdateInput(role: Role): Prisma.RoleUpdateInput {
    return {
      role: role.Role,
      updatedAt: new Date(),
    };
  }

  /**
   * Convert Domain Role entity to Prisma Role model
   */
  static toPrismaModel(role: Role): PrismaRole {
    return {
      id: role.id,
      role: role.Role,
      createdAt: role.createdAt ?? new Date(),
      updatedAt: role.updatedAt ?? new Date(),
    };
  }
}