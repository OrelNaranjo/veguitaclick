import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody, ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { CreateImageDto } from '../../dtos/image/create-image.dto';
import { UpdateImageDto } from '../../dtos/image/update-image.dto';
import { Image } from '../../entities/image.entity';
import { ImagesService } from '../../services/images/images.service';

@Controller('images')
@ApiTags('Imagenes')
export class ImagesController {
    constructor(private readonly imagesService: ImagesService) { }

    @Post()
    @ApiResponse({ status: 201, description: 'La imagen ha sido creada exitosamente.' })
    @ApiBody({ type: CreateImageDto })
    create(@Body() createImageDto: CreateImageDto): Promise<Image> {
        return this.imagesService.create(createImageDto);
    }

    @Get()
    @ApiOkResponse({ description: 'Lista de todas las imagenes.' })
    findAll(): Promise<Image[]> {
        return this.imagesService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ description: 'La imagen con el id especificado.' })
    @ApiParam({ name: 'id', description: 'ID de la imagen' })
    findOne(@Param('id') id: string): Promise<Image> {
        return this.imagesService.findOne(+id);
    }

    @Patch(':id')
    @ApiResponse({ status: 200, description: 'La imagen ha sido actualizada exitosamente.' })
    @ApiBody({ type: UpdateImageDto })
    @ApiParam({ name: 'id', description: 'ID de la imagen' })
    async update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto): Promise<string> {
        await this.imagesService.update(+id, updateImageDto);
        return 'La imagen ha sido actualizada exitosamente.';
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'La imagen ha sido eliminada exitosamente.' })
    @ApiParam({ name: 'id', description: 'ID de la imagen' })
    async remove(@Param('id') id: string): Promise<void> {
        await this.imagesService.remove(+id);
    }
}
