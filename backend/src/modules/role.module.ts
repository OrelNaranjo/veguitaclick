import { Module } from '@nestjs/common';
import { RoleService } from '../services/role/role.service';
import { RolesController } from '../controllers/roles/roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from '../entities/roles.entity';
import { Privileges } from '../entities/privileges.entity';

@Module({
imports: [TypeOrmModule.forFeature([Roles, Privileges])],
  controllers: [RolesController],
  providers: [RoleService],
})
export class RoleModule {}
