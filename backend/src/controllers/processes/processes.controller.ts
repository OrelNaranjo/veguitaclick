import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProcessesService } from '../../services/processes/processes.service';
import { CreateProcessDto } from '../../dtos/process/create-process.dto';
import { UpdateProcessDto } from '../../dtos/process/update-process.dto';
import { ApiTags, ApiResponse, ApiOkResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { Process } from '../../entities/process.entity';

@Controller('processes')
@ApiTags('Processes')
export class ProcessesController {
  constructor(private readonly processesService: ProcessesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'El process ha sido creado exitosamente.' })
  @ApiBody({ type: CreateProcessDto })
  create(@Body() createProcessDto: CreateProcessDto): Promise<Process> {
    return this.processesService.create(createProcessDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Lista de todos los process.' })
  findAll(): Promise<Process[]> {
    return this.processesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'El process con el id especificado.' })
  @ApiParam({ name: 'id', description: 'ID del process' })
  findOne(@Param('id') id: string): Promise<Process> {
    return this.processesService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'El process ha sido actualizado exitosamente.' })
  @ApiBody({ type: UpdateProcessDto })
  @ApiParam({ name: 'id', description: 'ID del process' })
  async update(@Param('id') id: string, @Body() updateProcessDto: UpdateProcessDto): Promise<string> {
    await this.processesService.update(+id, updateProcessDto);
    return 'El process ha sido actualizado exitosamente.';
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'El process ha sido eliminado exitosamente.' })
  @ApiParam({ name: 'id', description: 'ID del process' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.processesService.remove(+id);
  }
}