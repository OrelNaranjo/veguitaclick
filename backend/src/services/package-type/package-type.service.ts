import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PackageTypes } from '../../entities/package-types.entity';
import { Repository } from 'typeorm';
import { CreatePackageTypeDto } from 'src/dtos/create-package-type.dto';
import { UpdatePackageTypeDto } from 'src/dtos/update-package-type.dto';

@Injectable()
export class PackageTypeService {
    constructor(
        @InjectRepository(PackageTypes)
        private packageTypeRepository: Repository<PackageTypes>,
    ) { }

    async create(createPackageTypeDto: CreatePackageTypeDto): Promise<PackageTypes> {
        const packageType = this.packageTypeRepository.create(createPackageTypeDto);
        return this.packageTypeRepository.save(packageType);
    }

    async findAll(): Promise<PackageTypes[]> {
        return this.packageTypeRepository.find();
    }

    async findOne(id: number): Promise<PackageTypes> {
        return this.packageTypeRepository.findOneBy({ id: id });
    }

    async update(id: number, updatePackageTypeDto: UpdatePackageTypeDto): Promise<PackageTypes> {
        const packageType = await this.packageTypeRepository.findOneBy({ id: id });
        return this.packageTypeRepository.save({ ...packageType, ...updatePackageTypeDto });
    }

    async remove(id: number): Promise<void> {
        const packageType = await this.packageTypeRepository.findOneBy({ id: id });
        await this.packageTypeRepository.remove(packageType);
    }
}
