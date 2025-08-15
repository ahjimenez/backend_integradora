import { Controller, Get, Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GetClientsUseCase } from './modules/clients/application/use-cases/get-clients.use-case';
import { CreateClientUseCase } from './modules/clients/application/use-cases/create-client.use-case';
import { ClientRepository } from './modules/clients/domain/interfaces/client-repository.interface'; 
import { PrismaClientsRepository } from './modules/clients/infraestructure/repositories/prisma-clients.repository';
import { PrismaService } from './core/databases/prisma.service';
import { ClientsController } from './modules/clients/infraestructure/controllers/clients.controller';
import { ClientsModule } from './modules/clients/clients.module';
import { GetServicesUseCase } from './modules/services/application/use-cases/get-services.use-case';
import { CreateServicesUseCase } from './modules/services/application/use-cases/create-services.use-case';
import { ServicesModule } from './modules/services/services.module';
import { ServicesController } from './modules/services/services.controller';
import { PrismaServicesRepository } from './modules/services/infraestructure/repositories/prisma-services.repository';


@Module({
  imports: [ServicesModule],
  controllers: [AppController, ServicesController],
  providers: [
    PrismaService,
    {
      provide: PrismaServicesRepository,
      useClass: PrismaServicesRepository, // Reemplazamos MemoryClientsRepository,
    },
    CreateServicesUseCase,
    GetServicesUseCase,
    AppService,
  ],
}
)

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}