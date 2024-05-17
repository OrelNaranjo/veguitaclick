import { Module } from '@nestjs/common';
import { ProcessesService } from '../services/processes/processes.service';
import { ProcessesController } from '../controllers/processes/processes.controller';
import { Process } from '../entities/process.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Process])],
  controllers: [ProcessesController],
  providers: [ProcessesService],
})
export class ProcessesModule {}
