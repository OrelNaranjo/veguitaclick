import { Module } from '@nestjs/common';
import { PaymentDetailsController } from '../controllers/payment-details/payment-details.controller';
import { PaymentDetailsService } from '../services/payment-details/payment-details.service';

@Module({
  controllers: [PaymentDetailsController],
  providers: [PaymentDetailsService],
})
export class PaymentDetailsModule {}
