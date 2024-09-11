import 'reflect-metadata';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from './entities/url/url.entity';

// all of this params are configures in the .env file
export const TypeormModule = TypeOrmModule.forRootAsync({
  useFactory: async () => ({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [Link],
    synchronize: true,
    logging: true,
  }),
});
