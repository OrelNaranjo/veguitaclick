import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from '../../dtos/category/create-category.dto';
import { UpdateCategoryDto } from '../../dtos/category/update-category.dto';
import { Categories } from '../../entities/categories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Categories)
        private categoryRepository: Repository<Categories>,
    ) { }

    async create(createCategoryDto: CreateCategoryDto): Promise<Categories> {
        const category = this.categoryRepository.create(createCategoryDto);
        return this.categoryRepository.save(category);
    }

    async findAll(): Promise<Categories[]> {
        return this.categoryRepository.find();
    }

    async findOne(id: number): Promise<Categories> {
        return this.categoryRepository.findOneBy({ id: id });
    }

    async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Categories> {
        const category = await this.categoryRepository.findOneBy({ id: id });
        return this.categoryRepository.save({ ...category, ...updateCategoryDto });
    }

    async remove(id: number): Promise<void> {
        const category = await this.categoryRepository.findOneBy({ id: id });
        await this.categoryRepository.remove(category);
    }
}
