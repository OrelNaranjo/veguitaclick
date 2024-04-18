import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductoDto } from 'src/dtos/create-producto.dto';
import { UpdateProductoDto } from 'src/dtos/update-producto.dto';
import { Producto } from 'src/entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>,
    ) {}

    async create(createProductoDto: CreateProductoDto): Promise<Producto> {
        const producto = this.productoRepository.create(createProductoDto);
        return this.productoRepository.save(producto);
    }

    async findAll(): Promise<Producto[]> {
        return this.productoRepository.find();
    }

    async findOne(id: number): Promise<Producto> {
        return this.productoRepository.findOneBy({ id: id });
    }

    async update(id: number, updateProductoDto: UpdateProductoDto): Promise<Producto> {
        const producto = await this.productoRepository.preload({ id: +id, ...updateProductoDto });
        return this.productoRepository.save(producto);
    }

    async remove(id: number): Promise<void> {
        const producto = await this.findOne(id);
        this.productoRepository.remove(producto);
    }
}
