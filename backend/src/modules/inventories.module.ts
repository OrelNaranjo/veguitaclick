import { Module } from '@nestjs/common';
import { InventoriesService } from '../services/inventories/inventories.service';
import { InventoriesController } from '../controllers/inventories/inventories.controller';

@Module({
  controllers: [InventoriesController],
  providers: [InventoriesService],
})
export class InventoriesModule {}
