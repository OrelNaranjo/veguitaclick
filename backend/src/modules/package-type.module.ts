import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageTypes } from '../entities/package-types.entity';
import { PackageTypesController } from '../controllers/package-types/package-types.controller';
import { PackageTypeService } from '../services/package-type/package-type.service';

@Module({
    imports: [TypeOrmModule.forFeature([PackageTypes])],
    controllers: [PackageTypesController],
    providers: [PackageTypeService],
})
export class PackageTypeModule {}
