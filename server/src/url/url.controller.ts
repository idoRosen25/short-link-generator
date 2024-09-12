import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { HandleUrlBody } from '../entities/url/dto/url.dto';
import { UrlService } from 'src/url/url.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { Link } from 'src/entities/url/url.entity';

@Controller('/url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @ApiBody({
    type: HandleUrlBody,
  })
  @ApiResponse({
    status: 201,
    description: 'Short URL created',
    type: Link,
  })
  @ApiResponse({
    status: 400,
    description: 'Provided invalid URL',
  })
  @Post()
  async handleUrl(@Body() body: HandleUrlBody) {
    return this.urlService.createShortUrl(body);
  }
}
