import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from '../../dtos/payment-methods/create-payment-method.dto';
import { UpdatePaymentMethodDto } from '../../dtos/payment-methods/update-payment-method.dto';

@Injectable()
export class PaymentMethodsService {
  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return 'This action adds a new paymentMethod';
  }

  findAll() {
    return `This action returns all paymentMethods`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentMethod`;
  }

  update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return `This action updates a #${id} paymentMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentMethod`;
  }
}
