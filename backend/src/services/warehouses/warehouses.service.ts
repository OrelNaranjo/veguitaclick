import { Injectable } from '@nestjs/common';
import { CreateWarehouseDto } from '../../dtos/warehouse/create-warehouse.dto';
import { UpdateWarehouseDto } from '../../dtos/warehouse/update-warehouse.dto';

@Injectable()
export class WarehousesService {
  create(createWarehouseDto: CreateWarehouseDto) {
    return 'This action adds a new warehouse';
  }

  findAll() {
    return `This action returns all warehouses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} warehouse`;
  }

  update(id: number, updateWarehouseDto: UpdateWarehouseDto) {
    return `This action updates a #${id} warehouse`;
  }

  remove(id: number) {
    return `This action removes a #${id} warehouse`;
  }
}
