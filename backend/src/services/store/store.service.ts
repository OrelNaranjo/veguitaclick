import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stores } from '../../entities/stores.entity';
import { CreateStoreDto } from '../../dtos/store/create-store-dto';
import { UpdateStoreDto } from '../../dtos/store/update-store.dto';

@Injectable()
export class StoreService {
    constructor(
        @InjectRepository(Stores)
        private storeRepository: Repository<Stores>,
    ) { }

    async create(createStoreDto: CreateStoreDto): Promise<Stores> {
        const store = this.storeRepository.create(createStoreDto);
        return this.storeRepository.save(store);
    }

    findAll(): Promise<Stores[]> {
        return this.storeRepository.find();
    }

    findOne(id: number): Promise<Stores> {
        return this.storeRepository.findOneBy({ id: id });
    }

    async update(id: number, updateStoreDto: UpdateStoreDto): Promise<Stores> {
        const store = await this.storeRepository.findOneBy({ id: id });
        return this.storeRepository.save({ ...store, ...updateStoreDto });
    }

    async remove(id: number): Promise<void> {
        const store = await this.storeRepository.findOneBy({ id: id });
        await this.storeRepository.remove(store);
    }
}
