import { Module } from '@nestjs/common';
import { PrivilegeService } from '../services/privilege/privilege.service';
import { PrivilegesController } from '../controllers/privileges/privileges.controller';
import { Privileges } from '../entities/privileges.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Privileges])],
  controllers: [PrivilegesController],
  providers: [PrivilegeService],
})
export class PrivilegeModule {}