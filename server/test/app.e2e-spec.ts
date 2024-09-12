import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
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

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let mockLinkRepository: MockType<Repository<Link>>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [
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

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('Should create a valid url', async () => {
    mockLinkRepository.save.mockReturnValue({
      shortLink: mockShortURL,
      originalLink: mockOriginalURL,
    } as Link);
  });
});
