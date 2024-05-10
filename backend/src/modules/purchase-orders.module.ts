import { Module } from '@nestjs/common';
import { PurchaseOrdersService } from '../services/purchase-orders/purchase-orders.service';
import { PurchaseOrdersController } from '../controllers/purchase-orders/purchase-orders.controller';
import { AuthModule } from './auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseOrder } from '../entities/purchase-order.entity';
import { PurchaseOrderDetail } from '../entities/purchase-order-detail.entity';
import { MailsService } from '../services/mails/mails.service';
import { Supplier } from '../entities/supplier.entity';
import { Employee } from '../entities/employee.entity';
import { Product } from '../entities/product.entity';
import { PurchaseOrdersPaymentService } from '../services/purchase-orders-payment/purchase-orders-payment.service';
import { PurchaseOrdersPayment } from '../entities/purchase-orders-payment.entity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([PurchaseOrder, PurchaseOrderDetail, PurchaseOrdersPayment, Employee, Supplier, Product])
  ],
  controllers: [PurchaseOrdersController],
  providers: [PurchaseOrdersService, PurchaseOrdersPaymentService, MailsService],
})
export class PurchaseOrdersModule {}
