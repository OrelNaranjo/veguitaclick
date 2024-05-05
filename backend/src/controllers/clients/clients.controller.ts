import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody, ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { CreateClientDto } from '../../dtos/client/create-client.dto';
import { UpdateClientDto } from '../../dtos/client/update-client.dto';
import { Clients } from '../../entities/clients.entity';
import { ClientService } from '../../services/client/client.service';

@Controller('clients')
@ApiTags('Clientes')
export class ClientsController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'El cliente ha sido creado exitosamente. ',
  })
  @ApiBody({ type: CreateClientDto })
  create(@Body() createClientDto: CreateClientDto): Promise<Clients> {
    return this.clientService.create(createClientDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Lista de todos los clientes.' })
  findAll(): Promise<Clients[]> {
    return this.clientService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'El cliente con el id especificado.' })
  @ApiParam({ name: 'id', description: 'ID del cliente' })
  findOne(@Param('id') id: string): Promise<Clients> {
    return this.clientService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'El cliente ha sido actualizado exitosamente.',
  })
  @ApiBody({ type: UpdateClientDto })
  @ApiParam({ name: 'id', description: 'ID del cliente' })
  async update(
    @Param('id') id: string,
    @Body() updateClientDto: UpdateClientDto,
  ): Promise<string> {
    await this.clientService.update(+id, updateClientDto);
    return 'El cliente ha sido actualizado exitosamente.';
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'El cliente ha sido eliminado exitosamente.',
  })
  @ApiParam({ name: 'id', description: 'ID del cliente' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.clientService.remove(+id);
  }
}
