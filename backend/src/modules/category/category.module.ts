import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from 'src/controllers/categories/categories.controller';
import { Categories } from 'src/entities/categories.entity';
import { CategoryService } from 'src/services/category/category.service';

@Module({
    imports: [TypeOrmModule.forFeature([Categories])],
    controllers: [CategoriesController],
    providers: [CategoryService],
})
export class CategoryModule {}
