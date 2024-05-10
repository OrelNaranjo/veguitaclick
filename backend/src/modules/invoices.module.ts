import { Module } from '@nestjs/common';
import { InvoicesService } from '../services/invoices/invoices.service';
import { InvoicesController } from '../controllers/invoices/invoices.controller';

@Module({
  controllers: [InvoicesController],
  providers: [InvoicesService],
})
export class InvoicesModule {}
