import { Role } from "../../domain/entities/role";
import { RoleRepository } from "./role-repository.interface";

export class ConcreteRoleRepository implements RoleRepository {
  #roles: Role[] = [];

  async create(role: Role): Promise<Role | null> {
    this.#roles.push(role);
    return role;
  }

  async getAll(): Promise<Role[]> {
    return this.#roles;
  }

  async getById(id: string): Promise<Role | null> {
    return this.#roles.find((item) => item.id === id) || null;
  }

  async update(id: string, roleData: Partial<Role>): Promise<Role> {
    const role = await this.getById(id);
    if (!role) {
      throw new Error('Role not found');
    }
    
    Object.assign(role, roleData);
    return role;
  }

  async delete(id: string): Promise<void> {
   const index = this.#roles.findIndex((item) => item.id === id);
   if (index !== -1) {
     this.#roles.splice(index, 1);
   }
 }
}