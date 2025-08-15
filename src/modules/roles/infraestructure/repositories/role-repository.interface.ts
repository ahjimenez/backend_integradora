import { Role } from "../../domain/entities/role";
export abstract class RoleRepository {
  abstract create(role: Role): Promise<Role | null>;
  abstract getAll(): Promise<Role[]>;
  abstract getById(id: string): Promise<Role | null>;
  abstract update(id: string, roleData: Partial<Role>): Promise<Role>;
  abstract delete(id: string): Promise<void>;
}