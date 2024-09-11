import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from './entities/url/url.entity';
import { UrlController } from './entities/url.controller';
import { UrlService } from './url.service';

@Module({
  imports: [TypeOrmModule.forFeature([Link])],
  controllers: [UrlController],
  providers: [UrlService],
  exports: [UrlService],
})
export class UrlModule {}
