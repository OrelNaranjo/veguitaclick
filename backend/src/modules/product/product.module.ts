import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from 'src/controllers/products/products.controller';
import { Products } from 'src/entities/products.entity';
import { ProductService } from 'src/services/product/product.service';

@Module({
    imports: [TypeOrmModule.forFeature([Products])],
    controllers: [ProductsController],
    providers: [ProductService],
})
export class ProductModule {}
