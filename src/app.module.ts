/*import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './modules/clients/clients.module';
import { ClientsController } from './modules/clients/infraestructure/controllers/clients.controller';
import { CreateClientUseCase } from './modules/clients/application/use-cases/create-client.use-case';
import { ClientRepository, IClientRepositoryToken } from './modules/clients/domain/interfaces/client-repository.interface';
import { GetClientsUseCase } from './modules/clients/application/use-cases/get-clients.use-case';
import { PrismaClientsRepository } from './modules/clients/infraestructure/repositories/prisma-clients.repository';
import { PrismaService } from './core/databases/prisma.service';
@Module({
  // Importamos el módulo de clientes

  imports: [ClientsModule],
  controllers: [AppController, ClientsController],
  providers: [CreateClientUseCase, GetClientsUseCase, AppService],
})
export class AppModule {}*/

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './modules/clients/clients.module';
 

@Module({
  imports: [ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})    
export class AppModule {}
// This module imports the ClientsModule, sets up the AppController, and provides the necessary services and repositories for client management.