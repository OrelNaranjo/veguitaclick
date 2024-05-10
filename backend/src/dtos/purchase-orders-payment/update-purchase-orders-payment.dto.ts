import { PartialType } from '@nestjs/swagger';
import { CreatePurchaseOrdersPaymentDto } from './create-purchase-orders-payment.dto';

export class UpdatePurchaseOrdersPaymentDto extends PartialType(CreatePurchaseOrdersPaymentDto) {}
