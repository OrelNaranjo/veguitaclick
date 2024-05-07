import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseService],
    }).compile();

    service = module.get<DatabaseService>(DatabaseService);
  });

  it('should return correct TypeOrmModuleOptions',async () => {
    const options = await service.createTypeOrmOptions();
    expect(options).toEqual({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: ['dist/entities/*.entity{.ts,.js}'],
      migrations: ['dist/db/migrations/*{.ts,.js}'],
      dropSchema: process.env.DB_DROP_SCHEMA === 'true' || false,
      synchronize: process.env.DB_SYNCRONIZE === 'true' || false,
      migrationsTableName: "migrations",
      logging: process.env.DB_LOGGING === 'true' || false,
    });
  });
});
