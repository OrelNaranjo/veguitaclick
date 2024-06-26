import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from '../../dtos/category/create-category.dto';
import { UpdateCategoryDto } from '../../dtos/category/update-category.dto';
import { Category } from '../../entities/category.entity';
import { CategoryService } from '../../services/category/category.service';

@Controller('categories')
@ApiTags('Categorías')
export class CategoriesController {
    constructor(private readonly categoryService: CategoryService) { }

    @Post()
    @ApiResponse({ status: 201, description: 'La categoría ha sido creada exitosamente.' })
    @ApiBody({ type: CreateCategoryDto })
    create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
        return this.categoryService.create(createCategoryDto);
    }

    @Get()
    @ApiOkResponse({ description: 'Lista de todas las categorías.' })
    findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ description: 'La categoría con el id especificado.' })
    @ApiParam({ name: 'id', description: 'ID de la categoría' })
    findOne(@Param('id') id: string): Promise<Category> {
        return this.categoryService.findOne(+id);
    }

    @Patch(':id')
    @ApiResponse({ status: 200, description: 'La categoría ha sido actualizada exitosamente.' })
    @ApiBody({ type: UpdateCategoryDto })
    @ApiParam({ name: 'id', description: 'ID de la categoría' })
    async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto): Promise<string> {
        await this.categoryService.update(+id, updateCategoryDto);
        return 'La categoría ha sido actualizada exitosamente.';
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'La categoría ha sido eliminada exitosamente.' })
    @ApiParam({ name: 'id', description: 'ID de la categoría' })
    async remove(@Param('id') id: string): Promise<void> {
        await this.categoryService.remove(+id);
    }
}
