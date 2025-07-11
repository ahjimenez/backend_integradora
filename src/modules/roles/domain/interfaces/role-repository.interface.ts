import { Role} from "../entities/role";
export abstract class RoleRepository {
    abstract create(role: Role): Promise<Role | null>;
    abstract getall(): Promise<Role[]>;
    abstract getById(id: string): Promise<Role | null>;
}

export class ConcreteRoleRepository extends RoleRepository {
    private roles: Role[] = [];

    async create(role: Role): Promise<Role | null> {
        this.roles.push(role);
        return role;
    }

    async getall(): Promise<Role[]> {
        return this.roles;
    }

    async getById(id: string): Promise<Role | null> {
        return this.roles.find(role => role.id === id) || null;
    }
}