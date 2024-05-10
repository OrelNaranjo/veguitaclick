import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateProductDto } from '../../dtos/product/create-product.dto';
import { UpdateProductDto } from '../../dtos/product/update-product.dto';
import { ProductService } from '../../services/product/product.service';
import { ApiTags, ApiResponse, ApiOkResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { Product } from '../../entities/product.entity';

@Controller('products')
@ApiTags('Productos')
export class ProductsController {
  constructor(private readonly productsService: ProductService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'El product ha sido creado exitosamente.' })
  @ApiBody({ type: CreateProductDto })
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Lista de todos los products.' })
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'El product con el id especificado.' })
  @ApiParam({ name: 'id', description: 'ID del product' })
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'El product ha sido actualizado exitosamente.' })
  @ApiBody({ type: UpdateProductDto })
  @ApiParam({ name: 'id', description: 'ID del product' })
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<string> {
    await this.productsService.update(+id, updateProductDto);
    return 'El product ha sido actualizado exitosamente.';
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'El product ha sido eliminado exitosamente.' })
  @ApiParam({ name: 'id', description: 'ID del product' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.productsService.remove(+id);
  }
}