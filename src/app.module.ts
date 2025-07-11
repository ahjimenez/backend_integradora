import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttachmentsModule } from './modules/attachments/attachments.module';

@Module({
  imports: [AttachmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
