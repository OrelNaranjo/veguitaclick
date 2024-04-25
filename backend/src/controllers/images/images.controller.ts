import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody, ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { CreateImageDto } from '../../dtos/create-image.dto';
import { UpdateImageDto } from '../../dtos/update-image.dto';
import { Images } from '../../entities/images.entity';
import { ImageService } from '../../services/image/image.service';

@Controller('images')
@ApiTags('Imagenes')
export class ImagesController {
    constructor(private readonly imageService: ImageService) { }

    @Post()
    @ApiResponse({ status: 201, description: 'La imagen ha sido creada exitosamente.' })
    @ApiBody({ type: CreateImageDto })
    create(@Body() createImageDto: CreateImageDto): Promise<Images> {
        return this.imageService.create(createImageDto);
    }

    @Get()
    @ApiOkResponse({ description: 'Lista de todas las imagenes.' })
    findAll(): Promise<Images[]> {
        return this.imageService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ description: 'La imagen con el id especificado.' })
    @ApiParam({ name: 'id', description: 'ID de la imagen' })
    findOne(@Param('id') id: string): Promise<Images> {
        return this.imageService.findOne(+id);
    }

    @Patch(':id')
    @ApiResponse({ status: 200, description: 'La imagen ha sido actualizada exitosamente.' })
    @ApiBody({ type: UpdateImageDto })
    @ApiParam({ name: 'id', description: 'ID de la imagen' })
    async update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto): Promise<string> {
        await this.imageService.update(+id, updateImageDto);
        return 'La imagen ha sido actualizada exitosamente.';
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'La imagen ha sido eliminada exitosamente.' })
    @ApiParam({ name: 'id', description: 'ID de la imagen' })
    async remove(@Param('id') id: string): Promise<void> {
        await this.imageService.remove(+id);
    }
}
