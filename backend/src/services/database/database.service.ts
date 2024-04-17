import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
      return {
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: ['dist/src/entities/*.{ts,js}'],
        migrations: ['dist/db/migrations/*{.ts,.js}'],
        dropSchema: process.env.DB_DROP_SCHEMA === 'true' || false,
        synchronize: process.env.DB_SYNCRONIZE === 'true' || false,
        migrationsTableName: "migrations",
        logging: process.env.DB_LOGGING === 'true' || false,
      };
    }
}