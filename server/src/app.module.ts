import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormModule } from './typeorm.module';
import { UrlModule } from './url.module';

@Module({
  imports: [TypeormModule, UrlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
