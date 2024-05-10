import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeederService } from '../../services/seeder/seeder.service';

@Controller('seeder')
export class SeederController {
  constructor(private readonly seederService: SeederService) {}

  @Post()
  async dataSeeder() {
    const result = await this.seederService.dataSeeder();
    return result;
  }
}
