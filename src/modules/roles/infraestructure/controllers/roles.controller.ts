import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateRoleUseCase } from "../../application/uses-cases/create-role.use-case";
import { CreateRoleDto } from "../../application/dtos/create-role.dto";
import { Role } from "../../domain/entities/role";
import { GetRoleUseCase } from "../../application/uses-cases/get-role.use-case";
import { UpdateRoleUseCase } from "../../application/uses-cases/update-role.use-case";
import { DeleteRoleUseCase } from "../../application/uses-cases/delete-role.use-case";
import { RoleRepository } from "../repositories/role-repository.interface";@Controller("roles")

export class RoleController {
    constructor(
        private readonly createRoleUseCase: CreateRoleUseCase,
        private readonly getRoleUseCase: GetRoleUseCase,
        private readonly updateRoleUseCase: UpdateRoleUseCase,  // Added
        private readonly deleteRoleUseCase: DeleteRoleUseCase 
    ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createRoleDto: CreateRoleDto): Promise<Role | null> {
        return this.createRoleUseCase.execute(createRoleDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getAll(): Promise<Role[]> {
        return this.getRoleUseCase.execute();
    }

    @Get(":id")
    @HttpCode(HttpStatus.OK)
    async getById(@Body("id") id: string): Promise<Role | null> {
        return this.getRoleUseCase.executeById(id);
    }

    @Patch(":id")
    @HttpCode(HttpStatus.OK)
    async update(@Body("id") id: string, @Body() roleData: Partial<Role>): Promise<Role> {
        return this.updateRoleUseCase.update(id, roleData);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string): Promise<void> {
        return this.deleteRoleUseCase.execute(id);
    }

 } 