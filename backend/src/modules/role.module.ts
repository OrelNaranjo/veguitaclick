import { Module } from '@nestjs/common';
import { RoleService } from '../services/role/role.service';
import { RolesController } from '../controllers/roles/roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/entities/roles.entity';
import { Privileges } from 'src/entities/privileges.entity';

@Module({
imports: [TypeOrmModule.forFeature([Roles, Privileges])],
  controllers: [RolesController],
  providers: [RoleService],
})
export class RoleModule {}
