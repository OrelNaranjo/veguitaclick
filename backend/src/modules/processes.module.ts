import { Module } from '@nestjs/common';
import { ProcessesService } from '../services/processes/processes.service';
import { ProcessesController } from '../controllers/processes/processes.controller';

@Module({
  controllers: [ProcessesController],
  providers: [ProcessesService],
})
export class ProcessesModule {}
