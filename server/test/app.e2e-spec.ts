import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import { Link } from 'src/entities/url/url.entity';
import { Repository } from 'typeorm';
import {
  mockOriginalURL,
  mockShortURL,
  MockType,
  repositoryMockFactory,
} from './consts';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UrlController } from 'src/url/url.controller';
import { UrlService } from 'src/url/url.service';
import { DnsLookupService } from 'src/dns/dns.service';

const MockLinkEntity: Link = {
  shortLink: mockShortURL,
  originalLink: mockOriginalURL,
};

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let mockLinkRepository: MockType<Repository<Link>>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [UrlController],
      providers: [
        UrlService,
        DnsLookupService,
        {
          provide: getRepositoryToken(Link),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    mockLinkRepository = moduleFixture.get(getRepositoryToken(Link));
    await app.init();
  });

  it('Should create a valid url', async () => {
    mockLinkRepository.save.mockReturnValue(MockLinkEntity);

    const { body, status } = await request(app.getHttpServer())
      .post('/url')
      .send({
        url: mockOriginalURL,
      });

    expect(status).toBe(HttpStatus.CREATED);
    expect(body).toMatchObject(MockLinkEntity);
  });

  it('Should get Link by shortURL', async () => {
    mockLinkRepository.findOne.mockReturnValue(MockLinkEntity);

    const { body, status } = await request(app.getHttpServer())
      .post('/url')
      .send({
        url: mockShortURL,
      });

    expect(status).toBe(HttpStatus.CREATED);
    expect(body).toMatchObject(MockLinkEntity);
  });

  it('Throw error - Missing URL in body', async () => {
    const { status, body } = await request(app.getHttpServer())
      .post('/url')
      .send({
        url: 'www.3494hfead.com',
      });

    console.log('erorr in no rul : ', body);
    expect(status).toBe(HttpStatus.BAD_REQUEST);
  });

  it('Throw error - Invalid URL in body', async () => {
    const { status, body } = await request(app.getHttpServer())
      .post('/url')
      .send({
        url: 'www.3494hfead.com',
      });

    expect(status).toBe(HttpStatus.BAD_REQUEST);
    expect(body.message).toBe('Invalid URL');
  });

  afterAll(async () => {
    await app.close();
  });
});
