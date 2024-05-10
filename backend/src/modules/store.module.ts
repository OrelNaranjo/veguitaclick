import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from '../entities/store.entity';
import { StoresController } from '../controllers/stores/stores.controller';
import { StoreService } from '../services/store/store.service';

@Module({
    imports: [TypeOrmModule.forFeature([Store])],
    controllers: [StoresController],
    providers: [StoreService]
})
export class StoreModule {}
