import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from '../../dtos/vehicle/create-vehicle.dto';
import { UpdateVehicleDto } from '../../dtos/vehicle/update-vehicle.dto';

@Injectable()
export class VehiclesService {
  create(createVehicleDto: CreateVehicleDto) {
    return 'This action adds a new vehicle';
  }

  findAll() {
    return `This action returns all vehicles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicle`;
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return `This action updates a #${id} vehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicle`;
  }
}
