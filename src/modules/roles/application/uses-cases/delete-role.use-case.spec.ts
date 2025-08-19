import { Test } from '@nestjs/testing';
import { DeleteRoleUseCase } from './delete-role.use-case';
import { RoleRepository } from '../../infraestructure/repositories/role-repository.interface';

class MockRoleRepository {
    roles = [{ id: '1', role: 'Admin' }];

    async delete(id: string): Promise<void> {
        const index = this.roles.findIndex(r => r.id === id);
        if (index === -1) throw new Error(`Role with ID ${id} not found`);
        this.roles.splice(index, 1);
    }

    async getById(id: string): Promise<any> {
        return this.roles.find(r => r.id === id) || null;
    }
}

describe('DeleteRoleUseCase', () => {
    let useCase: DeleteRoleUseCase;
    let repository: RoleRepository;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [
                DeleteRoleUseCase,
                {
                    provide: 'RoleRepository',
                    useClass: MockRoleRepository,
                },
            ],
        }).compile();

        useCase = moduleRef.get<DeleteRoleUseCase>(DeleteRoleUseCase);
        repository = moduleRef.get<RoleRepository>('RoleRepository');
    });

    it('should delete a role by ID', async () => {
        await useCase.execute('1');
        const remaining = await repository.getById('1');
        expect(remaining).toBeNull();
    });

    it('should throw error if trying to delete non-existent role', async () => {
        await expect(useCase.execute('999'))
            .rejects
            .toThrow('Role with ID 999 not found');
    });
});