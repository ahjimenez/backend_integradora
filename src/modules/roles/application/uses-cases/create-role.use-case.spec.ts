import { Test } from '@nestjs/testing';
import { CreateRoleUseCase } from './create-role.use-case';
import { RoleRepository } from '../../domain/interfaces/role-repository.interface';
import { Role } from '../../domain/entities/role';

class MockRoleRepository {
    roles: Role[] = [];

    async create(role: Role): Promise<Role | null> {
        this.roles.push(role);
        return role;
    }
}

describe('CreateRoleUseCase', () => {
    let useCase: CreateRoleUseCase;
    let repository: RoleRepository;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [
                CreateRoleUseCase,
                {
                    provide: 'RoleRepository',
                    useClass: MockRoleRepository,
                },
            ],
        }).compile();

        useCase = moduleRef.get<CreateRoleUseCase>(CreateRoleUseCase);
        repository = moduleRef.get<RoleRepository>('RoleRepository');
    });

    it('should create a new role', async () => {
        const input = { role: 'Admin' };
        const result = await useCase.execute(input);

        expect(result).toBeDefined();
        expect(result!.role).toBe('Admin');
    });
});