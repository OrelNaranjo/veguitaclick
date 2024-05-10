import { Injectable } from '@nestjs/common';
import { CreatePurchaseOrdersPaymentDto } from '../../dtos/purchase-orders-payment/create-purchase-orders-payment.dto';
import { UpdatePurchaseOrdersPaymentDto } from '../../dtos/purchase-orders-payment/update-purchase-orders-payment.dto';

@Injectable()
export class PurchaseOrdersPaymentService {
  create(createPurchaseOrdersPaymentDto: CreatePurchaseOrdersPaymentDto) {
    return 'This action adds a new purchaseOrdersPayment';
  }

  findAll() {
    return `This action returns all purchaseOrdersPayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchaseOrdersPayment`;
  }

  update(id: number, updatePurchaseOrdersPaymentDto: UpdatePurchaseOrdersPaymentDto) {
    return `This action updates a #${id} purchaseOrdersPayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseOrdersPayment`;
  }
}
