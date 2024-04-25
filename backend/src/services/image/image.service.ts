import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImageDto } from '../../dtos/create-image.dto';
import { UpdateImageDto } from '../../dtos/update-image.dto';
import { Images } from '../../entities/images.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService {
    constructor(
        @InjectRepository(Images)
        private imageRepository: Repository<Images>,
    ) { }

    async create(createImageDto: CreateImageDto): Promise<Images> {
        const image = this.imageRepository.create(createImageDto);
        return this.imageRepository.save(image);
    }

    async findAll(): Promise<Images[]> {
        return this.imageRepository.find();
    }

    async findOne(id: number): Promise<Images> {
        return this.imageRepository.findOneBy({ id: id });
    }

    async update(id: number, updateImageDto: UpdateImageDto): Promise<Images> {
        const image = await this.imageRepository.findOneBy({ id: id });
        return this.imageRepository.save({ ...image, ...updateImageDto });
    }

    async remove(id: number): Promise<void> {
        const image = await this.imageRepository.findOneBy({ id: id });
        await this.imageRepository.remove(image);
    }
}
