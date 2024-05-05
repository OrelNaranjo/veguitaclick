import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from '../../controllers/products/products.controller';
import { Products } from '../../entities/products.entity';
import { ProductService } from '../../services/product/product.service';

@Module({
    imports: [TypeOrmModule.forFeature([Products])],
    controllers: [ProductsController],
    providers: [ProductService],
})
export class ProductModule {}
