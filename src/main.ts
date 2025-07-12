import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilitar el Validation/Pipes globalmente
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // Lanza error si se envían propiedades no definidas en el DTO
      transform: true, // Transforma los datos entrantes a los tipos definidos en el DTO
      transformOptions: {
        enableImplicitConversion: true, // Permite la conversión implícita de tipos (ej. "123" a número)
      },
    })
  );

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
