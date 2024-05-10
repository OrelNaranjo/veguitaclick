import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from '../../dtos/product/create-product.dto';
import { UpdateProductDto } from '../../dtos/product/update-product.dto';
import { Product } from '../../entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) { }

    async create(createproductDto: CreateProductDto): Promise<Product> {
        const product = this.productRepository.create(createproductDto);
        return this.productRepository.save(product);
    }

    async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async findOne(id: number): Promise<Product> {
        return this.productRepository.findOneBy({ id: id });
    }

    async update(id: number, updateproductDto: UpdateProductDto): Promise<Product> {
        const product = await this.productRepository.findOneBy({ id: id });
        return this.productRepository.save({ ...product, ...updateproductDto });
    }

    async remove(id: number): Promise<void> {
        const product = await this.productRepository.findOneBy({ id: id });
        await this.productRepository.remove(product);
    }
}
