import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody, ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { StoreService } from '../../services/store/store.service';
import { CreateStoreDto } from '../../dtos/store/create-store-dto';
import { Store } from '../../entities/store.entity';
import { UpdateStoreDto } from '../../dtos/store/update-store.dto';

@Controller('stores')
@ApiTags('Tiendas')
export class StoresController {

    constructor(private readonly storeService: StoreService){}

    @Post()
    @ApiResponse({ status: 201, description: 'La tienda ha sido creada exitosamente. ' })
    @ApiBody({ type: CreateStoreDto })
    create(@Body() createStoreDto: CreateStoreDto): Promise<Store> {
      return this.storeService.create(createStoreDto);
    }

    @Get()
    @ApiOkResponse({ description: 'Lista de todas las tiendas.' })
    findAll(): Promise<Store[]> {
      return this.storeService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ description: 'La tienda con el id especificado.' })
    @ApiParam({ name: 'id', description: 'ID de la tienda' })
    findOne(@Param('id') id: string): Promise<Store> {
      return this.storeService.findOne(+id);
    }

    @Patch(':id')
    @ApiResponse({ status: 200, description: 'La tienda ha sido actualizada exitosamente.' })
    @ApiBody({ type: UpdateStoreDto })
    @ApiParam({ name: 'id', description: 'ID de la tienda' })
    async update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto): Promise<string> {
      await this.storeService.update(+id, updateStoreDto);
      return 'La tienda ha sido actualizada exitosamente.';
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'La tienda ha sido eliminada exitosamente.' })
    @ApiParam({ name: 'id', description: 'ID de la tienda' })
    async remove(@Param('id') id: string): Promise<void> {
      await this.storeService.remove(+id);
    }
}
