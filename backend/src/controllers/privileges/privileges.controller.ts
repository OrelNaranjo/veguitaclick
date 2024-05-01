import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrivilegeService } from '../../services/privilege/privilege.service';
import { CreatePrivilegeDto } from '../../dtos/privilege/create-privilege.dto';
import { UpdatePrivilegeDto } from '../../dtos/privilege/update-privilege.dto';

@Controller('privileges')
export class PrivilegesController {
  constructor(private readonly privilegeService: PrivilegeService) {}

  @Post()
  create(@Body() createPrivilegeDto: CreatePrivilegeDto) {
    return this.privilegeService.create(createPrivilegeDto);
  }

  @Get()
  findAll() {
    return this.privilegeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.privilegeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrivilegeDto: UpdatePrivilegeDto) {
    return this.privilegeService.update(+id, updatePrivilegeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.privilegeService.remove(+id);
  }
}