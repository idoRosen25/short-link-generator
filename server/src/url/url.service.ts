import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Link } from '../entities/url/url.entity';
import { Repository } from 'typeorm';
import { HandleUrlBody } from '../entities/url/dto/url.dto';
import { randomUUID } from 'crypto';
import { DnsLookupService } from 'src/dns/dns.service';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Link) private readonly linkRepository: Repository<Link>,
    private readonly dnsLookupService: DnsLookupService,
  ) {}

  async getAllLinks() {
    const links = await this.linkRepository.find();

    return links;
  }

  async createShortUrl({ url }: HandleUrlBody) {
    try {
      const existShortLink = await this.linkRepository.findOne({
        where: [{ shortLink: url }, { originalLink: url }],
      });

      if (existShortLink) {
        return existShortLink;
      }

      const isValidUrl = await this.dnsLookupService.checkValidUrl(url);
      if (!isValidUrl) {
        return new BadRequestException('Invalid URL');
      }

      const shortUrlKey = randomUUID().substring(0, 8);
      const link = new Link();

      link.shortLink = `http://${shortUrlKey}.com`;
      link.originalLink = url;

      const savedLink = await this.linkRepository.save(link);

      return savedLink;
    } catch (err) {
      console.error('Failed to create short url', err);
      return null;
    }
  }
}
