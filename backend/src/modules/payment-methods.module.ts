import { Module } from '@nestjs/common';
import { PaymentMethodsController } from '../controllers/payment-methods/payment-methods.controller';
import { PaymentMethodsService } from '../services/payment-methods/payment-methods.service';

@Module({
  controllers: [PaymentMethodsController],
  providers: [PaymentMethodsService],
})
export class PaymentMethodsModule {}
