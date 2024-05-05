import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { CreateUserDto } from '../../dtos/user/create-user.dto';
import { UpdateUserDto } from '../../dtos/user/update-user.dto';
import { AuthGuard } from '../../guards/auth/auth.guard';
import { GetPrivileges } from '../../decorators/app.decorator';

@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @GetPrivileges('create_user')
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @GetPrivileges('read_users')
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @GetPrivileges('update_user')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @GetPrivileges('create_user')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}