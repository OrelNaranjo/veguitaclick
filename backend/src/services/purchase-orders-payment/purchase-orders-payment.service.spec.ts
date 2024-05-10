import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseOrdersPaymentService } from './purchase-orders-payment.service';

describe('PurchaseOrdersPaymentService', () => {
  let service: PurchaseOrdersPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseOrdersPaymentService],
    }).compile();

    service = module.get<PurchaseOrdersPaymentService>(PurchaseOrdersPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
