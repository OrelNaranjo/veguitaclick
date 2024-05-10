import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePackageTypeDto } from '../../dtos/package-type/create-package-type.dto';
import { UpdatePackageTypeDto } from '../../dtos/package-type/update-package-type.dto';
import { PackageTypesService } from '../../services/package-types/package-types.service';
import { PackageType } from '../../entities/package-type.entity';

@Controller('package-types')
@ApiTags('Tipos de empaque')
export class PackageTypesController {
    constructor(private readonly packageTypesService: PackageTypesService) { }

    @Post()
    @ApiResponse({ status: 201, description: 'El tipo de empaque ha sido creado exitosamente.' })
    @ApiBody({ type: CreatePackageTypeDto })
    create(@Body() createPackageTypeDto: CreatePackageTypeDto): Promise<PackageType> {
        return this.packageTypesService.create(createPackageTypeDto);
    }

    @Get()
    @ApiOkResponse({ description: 'Lista de todos los tipos de empaque.' })
    findAll(): Promise<PackageType[]> {
        return this.packageTypesService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ description: 'El tipo de empaque con el id especificado.' })
    @ApiParam({ name: 'id', description: 'ID del tipo de empaque' })
    findOne(@Param('id') id: string): Promise<PackageType> {
        return this.packageTypesService.findOne(+id);
    }

    @Patch(':id')
    @ApiResponse({ status: 200, description: 'El tipo de empaque ha sido actualizado exitosamente.' })
    @ApiBody({ type: UpdatePackageTypeDto })
    @ApiParam({ name: 'id', description: 'ID del tipo de empaque' })
    async update(@Param('id') id: string, @Body() updatePackageTypeDto: UpdatePackageTypeDto): Promise<string> {
        await this.packageTypesService.update(+id, updatePackageTypeDto);
        return 'El tipo de empaque ha sido actualizado exitosamente.';
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'El tipo de empaque ha sido eliminado exitosamente.' })
    @ApiParam({ name: 'id', description: 'ID del tipo de empaque' })
    async remove(@Param('id') id: string): Promise<void> {
        await this.packageTypesService.remove(+id);
    }

}
