import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateRoleUseCase } from "../../application/uses-cases/create-role.use-case";
import { CreateRoleDto } from "../../application/dtos/create-role.dto";
import { Role } from "../../domain/entities/role";
import { GetRoleUseCase } from "../../application/uses-cases/get-role.use-case";
@Controller("roles")

export class rolesController {
    constructor(
        private readonly createRoleUseCase: CreateRoleUseCase,
        private readonly getRoleUseCase: GetRoleUseCase
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
 } 