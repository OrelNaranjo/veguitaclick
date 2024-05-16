import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseOrdersController } from './purchase-orders.controller';
import { PurchaseOrdersService } from '../../services/purchase-orders/purchase-orders.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PurchaseOrder } from '../../entities/purchase-order.entity';
import { PurchaseOrderDetail } from '../../entities/purchase-order-detail.entity';
import { Product } from '../../entities/product.entity';
import { Supplier } from '../../entities/supplier.entity';
import { Employee } from '../../entities/employee.entity';
import { MailsService } from '../../services/mails/mails.service';
import { JwtService } from '@nestjs/jwt';


describe('OrdersController', () => {
  let controller: PurchaseOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseOrdersController],
      providers: [
        PurchaseOrdersService,
        MailsService,
        JwtService,
        {
          provide: getRepositoryToken(PurchaseOrderDetail),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(PurchaseOrder),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Product),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Supplier),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          }
        },
        {
          provide: getRepositoryToken(Employee),
          useValue: {
            find: jest.fn(() => []),
            findOne: jest.fn(() => []),
            create: jest.fn(() => []),
            save: jest.fn(() => []),
            remove: jest.fn(() => []),
          }
        },
      ],
    }).compile();

    controller = module.get<PurchaseOrdersController>(PurchaseOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
