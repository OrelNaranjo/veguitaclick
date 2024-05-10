import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSupplierDto } from '../../dtos/supplier/create-supplier.dto';
import { UpdateSupplierDto } from '../../dtos/supplier/update-supplier.dto';
import { Supplier } from '../../entities/supplier.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SuppliersService {
    constructor(
        @InjectRepository(Supplier)
        private SupplierRepository: Repository<Supplier>,
    ) { }

    async create(createSupplierDto: CreateSupplierDto): Promise<Supplier> {
        const Supplier = this.SupplierRepository.create(createSupplierDto);
        return this.SupplierRepository.save(Supplier);
    }

    async findAll(): Promise<Supplier[]> {
        return this.SupplierRepository.find();
    }

    async findOne(id: number): Promise<Supplier> {
        return this.SupplierRepository.findOneBy({ id: id });
    }

    async update(id: number, updateSupplierDto: UpdateSupplierDto): Promise<Supplier> {
        const Supplier = await this.SupplierRepository.findOneBy({ id: id });
        return this.SupplierRepository.save({ ...Supplier, ...updateSupplierDto });
    }

    async remove(id: number): Promise<void> {
        const Supplier = await this.SupplierRepository.findOneBy({ id: id });
        await this.SupplierRepository.remove(Supplier);
    }
}
