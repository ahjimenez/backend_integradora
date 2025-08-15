import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { PrismaService } from 'src/core/databases/prisma.service';
import { CreateServicesUseCase } from './application/use-cases/create-services.use-case';
import { IServicesRepository } from './domain/interfaces/services-repository.interface';
import { PrismaServicesRepository } from './infraestructure/repositories/prisma-services.repository';
import { GetServicesUseCase } from './application/use-cases/get-services.use-case';

@Module({
providers: [
PrismaService,
  {
    provide: IServicesRepository,
    useClass: PrismaServicesRepository,
  },
  CreateServicesUseCase,
  GetServicesUseCase,
],

  controllers: [ServicesController],
})
export class ServicesModule {}
