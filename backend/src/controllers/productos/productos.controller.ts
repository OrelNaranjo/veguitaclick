import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateProductoDto } from '../../dtos/create-producto.dto';
import { UpdateProductoDto } from '../../dtos/update-producto.dto';
import { ProductoService } from '../../services/producto/producto.service';
import { ApiTags, ApiResponse, ApiOkResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { Producto } from 'src/entities/producto.entity';

@Controller('productos')
@ApiTags('Productos')
export class ProductosController {
  constructor(private readonly productosService: ProductoService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'El producto ha sido creado exitosamente.' })
  @ApiBody({ type: CreateProductoDto })
  create(@Body() createProductoDto: CreateProductoDto): Promise<Producto> {
    return this.productosService.create(createProductoDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Lista de todos los productos.' })
  findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'El producto con el id especificado.' })
  @ApiParam({ name: 'id', description: 'ID del producto' })
  findOne(@Param('id') id: string): Promise<Producto> {
    return this.productosService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'El producto ha sido actualizado exitosamente.' })
  @ApiBody({ type: UpdateProductoDto })
  @ApiParam({ name: 'id', description: 'ID del producto' })
  async update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto): Promise<string> {
    await this.productosService.update(+id, updateProductoDto);
    return 'El producto ha sido actualizado exitosamente.';
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'El producto ha sido eliminado exitosamente.' })
  @ApiParam({ name: 'id', description: 'ID del producto' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.productosService.remove(+id);
  }
}