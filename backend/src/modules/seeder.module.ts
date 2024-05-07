import { Module } from '@nestjs/common';
import { SeederService } from '../services/seeder/seeder.service';
import { SeederController } from '../controllers/seeders/seeder.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../entities/users.entity';
import { Roles } from '../entities/roles.entity';
import { Privileges } from '../entities/privileges.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Roles, Privileges])],
  controllers: [SeederController],
  providers: [SeederService],
})
export class SeederModule {}
