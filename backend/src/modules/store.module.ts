import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stores } from '../entities/stores.entity';
import { StoresController } from '../controllers/stores/stores.controller';
import { StoreService } from '../services/store/store.service';

@Module({
    imports: [TypeOrmModule.forFeature([Stores])],
    controllers: [StoresController],
    providers: [StoreService]
})
export class StoreModule {}
