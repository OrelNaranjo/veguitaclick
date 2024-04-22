import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productsController } from 'src/controllers/products/products.controller';
import { product } from 'src/entities/product.entity';
import { productService } from 'src/services/product/product.service';

@Module({
    imports: [TypeOrmModule.forFeature([product])],
    controllers: [productsController],
    providers: [productService],
})
export class productModule {}
