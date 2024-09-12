import { Module } from '@nestjs/common';
import { DnsLookupService } from './dns.service';

@Module({
  imports: [],
  controllers: [],
  providers: [DnsLookupService],
  exports: [DnsLookupService],
})
export class DnsLookupModule {}
