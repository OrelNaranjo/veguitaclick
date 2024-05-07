import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from '../controllers/categories/categories.controller';
import { Categories } from '../entities/categories.entity';
import { CategoryService } from '../services/category/category.service';

@Module({
    imports: [TypeOrmModule.forFeature([Categories])],
    controllers: [CategoriesController],
    providers: [CategoryService],
})
export class CategoryModule {}
