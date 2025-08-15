import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './modules/clients/clients.module';

import { PropertiesModule } from './modules/properties/properties.module';
import { AttachmentsModule } from './modules/attachments/attachments.module';
import { EstimatesModule } from './modules/estimates/estimates.module';
import { UsersModule } from './modules/users/users.module';
import { ServicesModule } from './modules/services/services.module';


@Module({
  imports: [
        UsersModule,
        EstimatesModule,
        AttachmentsModule,
        PropertiesModule,
        ClientsModule,
        ServicesModule,
        ],
  controllers: [AppController],
  providers: [
    AppService,
],
})

export class AppModule {
  // Este módulo es el punto de entrada de la aplicación NestJS
  // Aquí se importan los módulos necesarios y se configuran los controladores y servicios
  // El módulo EstimatesModule se encarga de la lógica relacionada con los estimados
} 

