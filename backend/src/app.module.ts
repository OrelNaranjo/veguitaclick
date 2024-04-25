import { Module } from '@nestjs/common';
import { DatabaseService } from './services/database/database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// Importar Modulos
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { ImageModule } from './modules/image/image.module';
import { PackageTypeModule } from './modules/package-type/package-type.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseService,
    }),
    ProductModule,
    CategoryModule,
    ImageModule,
    PackageTypeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
