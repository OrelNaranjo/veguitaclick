import { Module } from '@nestjs/common';
import { SeederService } from '../services/seeder/seeder.service';
import { SeederController } from '../controllers/seeders/seeder.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Roles } from 'src/entities/roles.entity';
import { Privileges } from 'src/entities/privileges.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Roles, Privileges])],
  controllers: [SeederController],
  providers: [SeederService],
})
export class SeederModule {}
