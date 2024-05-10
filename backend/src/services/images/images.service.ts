import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImageDto } from '../../dtos/image/create-image.dto';
import { UpdateImageDto } from '../../dtos/image/update-image.dto';
import { Image } from '../../entities/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesService {
    constructor(
        @InjectRepository(Image)
        private imageRepository: Repository<Image>,
    ) { }

    async create(createImageDto: CreateImageDto): Promise<Image> {
        const image = this.imageRepository.create(createImageDto);
        return this.imageRepository.save(image);
    }

    async findAll(): Promise<Image[]> {
        return this.imageRepository.find();
    }

    async findOne(id: number): Promise<Image> {
        return this.imageRepository.findOneBy({ id: id });
    }

    async update(id: number, updateImageDto: UpdateImageDto): Promise<Image> {
        const image = await this.imageRepository.findOneBy({ id: id });
        return this.imageRepository.save({ ...image, ...updateImageDto });
    }

    async remove(id: number): Promise<void> {
        const image = await this.imageRepository.findOneBy({ id: id });
        await this.imageRepository.remove(image);
    }
}
