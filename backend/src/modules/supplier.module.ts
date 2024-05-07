import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuppliersController } from '../controllers/suppliers/suppliers.controller';
import { Suppliers } from '../entities/suppliers.entity';
import { SupplierService } from '../services/supplier/supplier.service';

@Module({
    imports: [TypeOrmModule.forFeature([Suppliers])],
    controllers: [SuppliersController],
    providers: [SupplierService],
})
export class SupplierModule {}
