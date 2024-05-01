import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSupplierDto } from '../../dtos/supplier/create-supplier.dto';
import { UpdateSupplierDto } from '../../dtos/supplier/update-supplier.dto';
import { Suppliers } from '../../entities/Suppliers.entity';
import { SupplierService } from '../../services/supplier/supplier.service';


@Controller('suppliers')
@ApiTags('Proveedores')
export class SuppliersController {
    constructor(private readonly supplierService: SupplierService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'El proveedor ha sido creado exitosamente. ' })
  @ApiBody({ type: CreateSupplierDto })
  create(@Body() createSupplierDto: CreateSupplierDto): Promise<Suppliers> {
    return this.supplierService.create(createSupplierDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Lista de todos los proveedores.' })
  findAll(): Promise<Suppliers[]> {
    return this.supplierService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'El proveedor con el id especificado.' })
  @ApiParam({ name: 'id', description: 'ID del proveedor' })
  findOne(@Param('id') id: string): Promise<Suppliers> {
    return this.supplierService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'El proveedor ha sido actualizado exitosamente.' })
  @ApiBody({ type: UpdateSupplierDto })
  @ApiParam({ name: 'id', description: 'ID del proveedor' })
  async update(@Param('id') id: string, @Body() updateSupplierDto: UpdateSupplierDto): Promise<string> {
    await this.supplierService.update(+id, updateSupplierDto);
    return 'El proveedor ha sido actualizado exitosamente.';
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'El proveedor ha sido eliminado exitosamente.' })
  @ApiParam({ name: 'id', description: 'ID del proveedor' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.supplierService.remove(+id);
  }
}
