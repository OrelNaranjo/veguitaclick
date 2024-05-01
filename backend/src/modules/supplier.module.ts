import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuppliersController } from 'src/controllers/suppliers/suppliers.controller';
import { Suppliers } from 'src/entities/suppliers.entity';
import { SupplierService } from 'src/services/supplier/supplier.service';

@Module({
    imports: [TypeOrmModule.forFeature([Suppliers])],
    controllers: [SuppliersController],
    providers: [SupplierService],
})
export class SupplierModule {}
