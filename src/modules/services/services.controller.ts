import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateServicesUseCase } from './application/use-cases/create-services.use-case';
import { CreateServicesDto } from './application/dtos/create-services.dto';
import { Services } from './domain/entities/services';
import { GetServicesUseCase } from './application/use-cases/get-services.use-case';

@Controller('services')
export class ServicesController {

    constructor(
        private readonly createServicesUseCase: CreateServicesUseCase,
        private readonly getServicesUseCase: GetServicesUseCase,
    ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() CreateServicesDto: CreateServicesDto): Promise<Services | null> {
        console.log(CreateServicesDto);

        return this.createServicesUseCase.execute(CreateServicesDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<Services[]> {
        return this.getServicesUseCase.execute();
    }
}

