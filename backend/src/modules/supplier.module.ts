import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuppliersController } from '../controllers/suppliers/suppliers.controller';
import { Supplier } from '../entities/supplier.entity';
import { SuppliersService } from '../services/suppliers/suppliers.service';

@Module({
    imports: [TypeOrmModule.forFeature([Supplier])],
    controllers: [SuppliersController],
    providers: [SuppliersService],
})
export class SupplierModule {}
