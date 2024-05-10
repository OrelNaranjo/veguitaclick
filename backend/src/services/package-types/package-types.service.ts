import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PackageType } from '../../entities/package-type.entity';
import { Repository } from 'typeorm';
import { CreatePackageTypeDto } from '../../dtos/package-type/create-package-type.dto';
import { UpdatePackageTypeDto } from '../../dtos/package-type/update-package-type.dto';

@Injectable()
export class PackageTypesService {
    constructor(
        @InjectRepository(PackageType)
        private packageTypeRepository: Repository<PackageType>,
    ) { }

    async create(createPackageTypeDto: CreatePackageTypeDto): Promise<PackageType> {
        const packageType = this.packageTypeRepository.create(createPackageTypeDto);
        return this.packageTypeRepository.save(packageType);
    }

    async findAll(): Promise<PackageType[]> {
        return this.packageTypeRepository.find();
    }

    async findOne(id: number): Promise<PackageType> {
        return this.packageTypeRepository.findOneBy({ id: id });
    }

    async update(id: number, updatePackageTypeDto: UpdatePackageTypeDto): Promise<PackageType> {
        const packageType = await this.packageTypeRepository.findOneBy({ id: id });
        return this.packageTypeRepository.save({ ...packageType, ...updatePackageTypeDto });
    }

    async remove(id: number): Promise<void> {
        const packageType = await this.packageTypeRepository.findOneBy({ id: id });
        await this.packageTypeRepository.remove(packageType);
    }
}
