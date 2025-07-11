import { Role } from "../../domain/entities/role";
import { Prisma, Role as PrismaRole } from "generated/prisma";

export class roleMapper {
    static toDomain(prismaRole: PrismaRole): Role {
        return new Role(
            prismaRole.id, 
            prismaRole.role);
    }

    static toPersistence(role: Role): Prisma.RoleUncheckedCreateInput {
        return {
    id: role.id,
    role: role.Role,
    createdAt: (role as any).createdAt ?? new Date(),
    updatedAt: (role as any).updatedAt ?? new Date(),
};
}
}
