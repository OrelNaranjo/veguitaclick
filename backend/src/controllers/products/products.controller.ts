import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateproductDto } from '../../dtos/create-product.dto';
import { UpdateproductDto } from '../../dtos/update-product.dto';
import { productService } from '../../services/product/product.service';
import { ApiTags, ApiResponse, ApiOkResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { product } from 'src/entities/product.entity';

@Controller('products')
@ApiTags('products')
export class productsController {
  constructor(private readonly productsService: productService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'El product ha sido creado exitosamente.' })
  @ApiBody({ type: CreateproductDto })
  create(@Body() createproductDto: CreateproductDto): Promise<product> {
    return this.productsService.create(createproductDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Lista de todos los products.' })
  findAll(): Promise<product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'El product con el id especificado.' })
  @ApiParam({ name: 'id', description: 'ID del product' })
  findOne(@Param('id') id: string): Promise<product> {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'El product ha sido actualizado exitosamente.' })
  @ApiBody({ type: UpdateproductDto })
  @ApiParam({ name: 'id', description: 'ID del product' })
  async update(@Param('id') id: string, @Body() updateproductDto: UpdateproductDto): Promise<string> {
    await this.productsService.update(+id, updateproductDto);
    return 'El product ha sido actualizado exitosamente.';
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'El product ha sido eliminado exitosamente.' })
  @ApiParam({ name: 'id', description: 'ID del product' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.productsService.remove(+id);
  }
}