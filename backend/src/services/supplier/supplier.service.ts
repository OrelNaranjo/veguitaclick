import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSupplierDto } from '../../dtos/supplier/create-supplier.dto';
import { UpdateSupplierDto } from '../../dtos/supplier/update-supplier.dto';
import { Suppliers } from '../../entities/suppliers.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierService {
    constructor(
        @InjectRepository(Suppliers)
        private SupplierRepository: Repository<Suppliers>,
    ) { }

    async create(createSupplierDto: CreateSupplierDto): Promise<Suppliers> {
        const Supplier = this.SupplierRepository.create(createSupplierDto);
        return this.SupplierRepository.save(Supplier);
    }

    async findAll(): Promise<Suppliers[]> {
        return this.SupplierRepository.find();
    }

    async findOne(id: number): Promise<Suppliers> {
        return this.SupplierRepository.findOneBy({ id: id });
    }

    async update(id: number, updateSupplierDto: UpdateSupplierDto): Promise<Suppliers> {
        const Supplier = await this.SupplierRepository.findOneBy({ id: id });
        return this.SupplierRepository.save({ ...Supplier, ...updateSupplierDto });
    }

    async remove(id: number): Promise<void> {
        const Supplier = await this.SupplierRepository.findOneBy({ id: id });
        await this.SupplierRepository.remove(Supplier);
    }
}
