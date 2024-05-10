import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDto } from '../../dtos/store/create-store-dto';
import { UpdateStoreDto } from '../../dtos/store/update-store.dto';
import { Store } from '../../entities/store.entity';

@Injectable()
export class StoreService {
    constructor(
        @InjectRepository(Store)
        private storeRepository: Repository<Store>,
    ) { }

    async create(createStoreDto: CreateStoreDto): Promise<Store> {
        const store = this.storeRepository.create(createStoreDto);
        return this.storeRepository.save(store);
    }

    findAll(): Promise<Store[]> {
        return this.storeRepository.find();
    }

    findOne(id: number): Promise<Store> {
        return this.storeRepository.findOneBy({ id: id });
    }

    async update(id: number, updateStoreDto: UpdateStoreDto): Promise<Store> {
        const store = await this.storeRepository.findOneBy({ id: id });
        return this.storeRepository.save({ ...store, ...updateStoreDto });
    }

    async remove(id: number): Promise<void> {
        const store = await this.storeRepository.findOneBy({ id: id });
        await this.storeRepository.remove(store);
    }
}
