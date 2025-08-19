import { Test } from '@nestjs/testing';
import { UpdateRoleUseCase } from './update-role.use-case';
import { RoleRepository } from '../../infraestructure/repositories/role-repository.interface';
import { Role } from '../../domain/entities/role';
import { NotFoundException } from '@nestjs/common';

// Mock del repositorio
class MockRoleRepository {
    roles: Role[] = [
        new Role('1', 'Admin'),
    ];

    async getById(id: string): Promise<Role | null> {
        return this.roles.find(r => r.id === id) || null;
    }

    async update(id: string, roleData: Partial<Role>): Promise<Role> {
        const index = this.roles.findIndex(r => r.id === id);
        if (index === -1) throw new NotFoundException('Role not found');
        const updatedRole = new Role(
            this.roles[index].id,
            roleData.role || this.roles[index].role,
            this.roles[index].createdAt,
            new Date()
        );
        this.roles[index] = updatedRole;
        return this.roles[index];
    }
}

describe('UpdateRoleUseCase', () => {
    let useCase: UpdateRoleUseCase;
    let repository: RoleRepository;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [
                UpdateRoleUseCase,
                {
                    provide: 'RoleRepository',
                    useClass: MockRoleRepository,
                },
            ],
        }).compile();

        useCase = moduleRef.get<UpdateRoleUseCase>(UpdateRoleUseCase);
        repository = moduleRef.get<RoleRepository>('RoleRepository');
    });

    it('should update an existing role', async () => {
        const result = await useCase.update('1', { role: 'Super Admin' });

        expect(result.role).toBe('Super Admin');
    });

    it('should throw an error if role does not exist', async () => {
        await expect(useCase.update('999', { role: 'Fake' }))
            .rejects
            .toThrow();
    });
});