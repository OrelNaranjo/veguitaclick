import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from '../controllers/categories/categories.controller';
import { Category } from '../entities/category.entity';
import { CategoryService } from '../services/category/category.service';

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    controllers: [CategoriesController],
    providers: [CategoryService],
})
export class CategoryModule {}
