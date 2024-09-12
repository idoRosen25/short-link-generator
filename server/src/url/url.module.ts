import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from '../entities/url/url.entity';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';
import { DnsLookupModule } from 'src/dns/dns.module';

@Module({
  imports: [TypeOrmModule.forFeature([Link]), DnsLookupModule],
  controllers: [UrlController],
  providers: [UrlService],
  exports: [UrlService],
})
export class UrlModule {}
