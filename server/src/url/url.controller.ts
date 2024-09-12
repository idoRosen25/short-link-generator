import { Body, Controller, Post } from '@nestjs/common';
import { HandleUrlBody } from '../entities/url/dto/url.dto';
import { UrlService } from 'src/url/url.service';

@Controller('/url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  async handleUrl(@Body() body: HandleUrlBody) {
    return this.urlService.createShortUrl(body);
  }
}
