import { ConcreteRoleRepository } from '@roles/infraestructure/repositories/concrete-role.repository';
import { Role } from '@roles/domain/entities/role';

describe('ConcreteRoleRepository', () => {
    let repository: ConcreteRoleRepository;

    beforeEach(() => {
        repository = new ConcreteRoleRepository();
    });

    it('should create a role', async () => {
        const role = new Role('1', 'User');
        const result = await repository.create(role);

        expect(result).toEqual(role);
        expect(await repository.getAll()).toHaveLength(1);
    });

    it('should get all roles', async () => {
        await repository.create(new Role('1', 'Admin'));
        await repository.create(new Role('2', 'Editor'));

        const roles = await repository.getAll();
        expect(roles).toHaveLength(2);
    });

    it('should get role by ID', async () => {
        const role = new Role('1', 'Admin');
        await repository.create(role);

        const found = await repository.getById('1');
        expect(found).toEqual(role);
    });

    it('should return null for non-existent role', async () => {
        const found = await repository.getById('999');
        expect(found).toBeNull();
    });

    it('should update a role partially', async () => {
        const role = new Role('1', 'User');
        await repository.create(role);

        const updated = await repository.update('1', { role: 'Moderator' });
        expect(updated.role).toBe('Moderator');
    });

    it('should delete a role', async () => {
        await repository.create(new Role('1', 'User'));
        await repository.delete('1');

        const remaining = await repository.getAll();
        expect(remaining).toHaveLength(0);
    });
});