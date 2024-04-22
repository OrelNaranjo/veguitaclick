import { Module } from '@nestjs/common';
import { DatabaseService } from './services/database/database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// Importar Modulos
import { productModule } from './modules/product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseService,
    }),
    productModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
