import { Body, Controller, Post } from '@nestjs/common';
import { HandleUrlBody } from './url/dto/url.dto';
import { UrlService } from 'src/url.service';

@Controller('/url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  async handleUrl(@Body() body: HandleUrlBody) {
    return this.urlService.createShortUrl(body);
  }
}
