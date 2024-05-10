import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from '../controllers/products/products.controller';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product/product.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductsController],
    providers: [ProductService],
})
export class ProductModule {}
