import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseOrdersService } from './purchase-orders.service';
import { PurchaseOrder } from '../../entities/purchase-order.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PurchaseOrderDetail } from '../../entities/purchase-order-detail.entity';
import { Employee } from '../../entities/employee.entity';
import { MailsService } from '../mails/mails.service';
import { Supplier } from '../../entities/supplier.entity';
import { Product } from '../../entities/product.entity';

describe('PurchaseOrdersService', () => {
  let service: PurchaseOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurchaseOrdersService,
        MailsService,
        {
          provide: getRepositoryToken(PurchaseOrder),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOneBy: jest.fn().mockResolvedValue(new PurchaseOrder()),
            create: jest.fn().mockReturnValue(new PurchaseOrder()),
            save: jest.fn(),
            remove: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(PurchaseOrderDetail),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOneBy: jest.fn().mockResolvedValue(new PurchaseOrderDetail()),
            create: jest.fn().mockReturnValue(new PurchaseOrderDetail()),
            save: jest.fn(),
            remove: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(Employee),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOneBy: jest.fn().mockResolvedValue(new Employee()),
            create: jest.fn().mockReturnValue(new Employee()),
            save: jest.fn(),
            remove: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(Supplier),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOneBy: jest.fn().mockResolvedValue(new Supplier()),
            create: jest.fn().mockReturnValue(new Supplier()),
            save: jest.fn(),
            remove: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(Product),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOneBy: jest.fn().mockResolvedValue(new Product()),
            create: jest.fn().mockReturnValue(new Product()),
            save: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PurchaseOrdersService>(PurchaseOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
