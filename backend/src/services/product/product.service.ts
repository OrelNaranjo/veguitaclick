import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from '../../dtos/create-product.dto';
import { UpdateProductDto } from '../../dtos/update-product.dto';
import { Products } from '../../entities/products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Products)
        private productRepository: Repository<Products>,
    ) { }

    async create(createproductDto: CreateProductDto): Promise<Products> {
        const product = this.productRepository.create(createproductDto);
        return this.productRepository.save(product);
    }

    async findAll(): Promise<Products[]> {
        return this.productRepository.find();
    }

    async findOne(id: number): Promise<Products> {
        return this.productRepository.findOneBy({ id: id });
    }

    async update(id: number, updateproductDto: UpdateProductDto): Promise<Products> {
        const product = await this.productRepository.findOneBy({ id: id });
        return this.productRepository.save({ ...product, ...updateproductDto });
    }

    async remove(id: number): Promise<void> {
        const product = await this.productRepository.findOneBy({ id: id });
        await this.productRepository.remove(product);
    }
}
