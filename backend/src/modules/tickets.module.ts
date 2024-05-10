import { Module } from '@nestjs/common';
import { TicketsService } from '../services/tickets/tickets.service';
import { TicketsController } from '../controllers/tickets/tickets.controller';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
