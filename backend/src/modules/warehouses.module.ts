import { Module } from '@nestjs/common';
import { WarehousesService } from '../services/warehouses/warehouses.service';
import { WarehousesController } from '../controllers/warehouses/warehouses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Warehouse } from '../entities/warehouse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Warehouse])],
  controllers: [WarehousesController],
  providers: [WarehousesService],
})
export class WarehousesModule {}
