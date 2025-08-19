import { Test } from '@nestjs/testing';
import { GetRoleUseCase } from './get-role.use-case';
import { RoleRepository } from '../../domain/interfaces/role-repository.interface';
import { Role } from '../../domain/entities/role';

class MockRoleRepository {
    roles: Role[] = [
        new Role('1', 'Admin'),
        new Role('2', 'User'),
    ];

    async getAll(): Promise<Role[]> {
        return this.roles;
    }
}

describe('GetRoleUseCase', () => {
    let useCase: GetRoleUseCase;
    let repository: RoleRepository;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [
                GetRoleUseCase,
                {
                    provide: 'RoleRepository',
                    useClass: MockRoleRepository,
                },
            ],
        }).compile();

        useCase = moduleRef.get<GetRoleUseCase>(GetRoleUseCase);
        repository = moduleRef.get<RoleRepository>('RoleRepository');
    });

    it('should return all roles', async () => {
        const result = await useCase.execute();

        expect(result).toHaveLength(2);
        expect(result).toEqual([
            { id: '1', role: 'Admin' },
            { id: '2', role: 'User' },
        ]);
    });
});