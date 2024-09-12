import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormModule } from './typeorm.module';
import { UrlModule } from './url/url.module';
import { DnsLookupModule } from './dns/dns.module';

@Module({
  imports: [TypeormModule, UrlModule, DnsLookupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
