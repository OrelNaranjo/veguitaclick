import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageType } from '../entities/package-type.entity';
import { PackageTypesController } from '../controllers/package-types/package-types.controller';
import { PackageTypesService } from '../services/package-types/package-types.service';

@Module({
    imports: [TypeOrmModule.forFeature([PackageType])],
    controllers: [PackageTypesController],
    providers: [PackageTypesService],
})
export class PackageTypeModule {}
