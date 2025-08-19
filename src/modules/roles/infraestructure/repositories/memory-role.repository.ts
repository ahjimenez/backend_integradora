import { Injectable } from "@nestjs/common";
import { RoleRepository } from "../../domain/interfaces/role-repository.interface";
import { Role } from "../../domain/entities/role";

/**
 * Repositorio para roles que usa memoria temporal
 */
@Injectable()
export class MemoryRoleRepository implements RoleRepository {
  #roles: Role[];

  constructor() {
    this.#roles = [];
  }

  async create(role: Role): Promise<Role | null> {
    role.setId(`r-${this.#roles.length + 1}`);
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