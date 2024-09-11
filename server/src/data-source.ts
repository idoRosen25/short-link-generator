import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Link } from './entities/url/url.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [Link],
  synchronize: true,
  logging: false,
});
