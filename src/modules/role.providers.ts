import { RoleRepository } from "./roles/domain/interfaces/role-repository.interface";

export const roleProviders = [
  {
    provide: 'RoleRepository',
    useClass: RoleRepository,
  },
];
