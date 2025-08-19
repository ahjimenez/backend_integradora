import { Test, TestingModule } from '@nestjs/testing';
import { RoleController } from './roles.controller';
import { CreateRoleUseCase } from '../../application/uses-cases/create-role.use-case';
import { GetRoleUseCase as GetAllRolesUseCase } from '../../application/uses-cases/get-role.use-case';
import { GetRoleUseCase as GetRoleByIdUseCase } from '../../application/uses-cases/get-role.use-case';
import { UpdateRoleUseCase } from '../../application/uses-cases/update-role.use-case';
import { DeleteRoleUseCase } from '../../application/uses-cases/delete-role.use-case';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

// Mocks de los casos de uso
const mockCreateRoleUseCase = { execute: jest.fn() };
const mockGetAllRolesUseCase = { execute: jest.fn() };
const mockGetRoleByIdUseCase = { execute: jest.fn() };
const mockUpdateRoleUseCase = { execute: jest.fn() };
const mockDeleteRoleUseCase = { execute: jest.fn() };

describe('RoleController', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            controllers: [RoleController],
            providers: [
                { provide: CreateRoleUseCase, useValue: mockCreateRoleUseCase },
                { provide: GetAllRolesUseCase, useValue: mockGetAllRolesUseCase },
                { provide: GetRoleByIdUseCase, useValue: mockGetRoleByIdUseCase },
                { provide: UpdateRoleUseCase, useValue: mockUpdateRoleUseCase },
                { provide: DeleteRoleUseCase, useValue: mockDeleteRoleUseCase },
            ],
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    it('/GET /roles', () => {
        mockGetAllRolesUseCase.execute.mockResolvedValue([
            { id: '1', role: 'Admin' },
        ]);

        return request(app.getHttpServer())
            .get('/roles')
            .expect(200)
            .expect([
                { id: '1', role: 'Admin' }
            ]);
    });

    it('/GET /roles/:id', () => {
        mockGetRoleByIdUseCase.execute.mockResolvedValue({
            id: '1',
            role: 'Admin',
        });

        return request(app.getHttpServer())
            .get('/roles/1')
            .expect(200)
            .expect({
                id: '1',
                role: 'Admin',
            });
    });

    it('/POST /roles', () => {
        mockCreateRoleUseCase.execute.mockResolvedValue({
            id: '1',
            role: 'User',
        });

        return request(app.getHttpServer())
            .post('/roles')
            .send({ role: 'User' })
            .expect(201)
            .expect({
                id: '1',
                role: 'User',
            });
    });

    it('/PATCH /roles/:id', () => {
        mockUpdateRoleUseCase.execute.mockResolvedValue({
            id: '1',
            role: 'Super Admin',
        });

        return request(app.getHttpServer())
            .patch('/roles/1')
            .send({ role: 'Super Admin' })
            .expect(200)
            .expect({
                id: '1',
                role: 'Super Admin',
            });
    });

    it('/DELETE /roles/:id', () => {
        mockDeleteRoleUseCase.execute.mockResolvedValue(undefined);

        return request(app.getHttpServer())
            .delete('/roles/1')
            .expect(200);
    });
});