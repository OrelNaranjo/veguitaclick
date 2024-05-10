import { Module } from '@nestjs/common';
import { GuidesService } from '../services/guides/guides.service';
import { GuidesController } from '../controllers/guides/guides.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guide } from '../entities/guide.entity';
import { GuideDetail } from '../entities/guide-detail.entity';
import { Store } from '../entities/store.entity';
import { Employee } from '../entities/employee.entity';
import { Warehouse } from '../entities/warehouse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Guide, GuideDetail, Store, Warehouse, Employee])],
  controllers: [GuidesController],
  providers: [GuidesService],
})
export class GuidesModule {}
