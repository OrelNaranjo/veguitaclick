import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateproductDto } from '../../dtos/create-product.dto';
import { UpdateproductDto } from '../../dtos/update-product.dto';
import { product } from '../../entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class productService {
    constructor(
        @InjectRepository(product)
        private productRepository: Repository<product>,
    ) { }

    async create(createproductDto: CreateproductDto): Promise<product> {
        const product = this.productRepository.create(createproductDto);
        return this.productRepository.save(product);
    }

    async findAll(): Promise<product[]> {
        return this.productRepository.find();
    }

    async findOne(id: number): Promise<product> {
        return this.productRepository.findOneBy({ id: id });
    }

    async update(id: number, updateproductDto: UpdateproductDto): Promise<product> {
        const product = await this.productRepository.findOneBy({ id: id });
        return this.productRepository.save({ ...product, ...updateproductDto });
    }

    async remove(id: number): Promise<void> {
        const product = await this.productRepository.findOneBy({ id: id });
        await this.productRepository.remove(product);
    }
}
