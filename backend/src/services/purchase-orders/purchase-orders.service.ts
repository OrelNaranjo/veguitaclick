import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePurchaseOrderDto } from '../../dtos/purchase-order/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from '../../dtos/purchase-order/update-purchase-order.dto';
import { PurchaseOrder } from '../../entities/purchase-order.entity';
import { PurchaseOrderDetail } from '../../entities/purchase-order-detail.entity';
import { MailsService } from '../mails/mails.service';
import { Employee } from '../../entities/employee.entity';
import { Supplier } from '../../entities/supplier.entity';
import { Product } from '../../entities/product.entity';

@Injectable()
export class PurchaseOrdersService {
  constructor(
    @InjectRepository(PurchaseOrder)
    private purchaseOrdersRepository: Repository<PurchaseOrder>,
    @InjectRepository(PurchaseOrderDetail)
    private purchaseOrderDetailsRepository: Repository<PurchaseOrderDetail>,
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private mailsService: MailsService,
  ) { }

  async create(createPurchaseOrderDto: CreatePurchaseOrderDto) {
    const { employeeId, supplierId, orderDetails } = createPurchaseOrderDto;

    const [employee, supplier] = await Promise.all([
      this.employeeRepository.findOneBy({ id: employeeId }),
      this.supplierRepository.findOneBy({ id: supplierId }),
    ]);

    const lastOrder = (await this.purchaseOrdersRepository.find({ order: { orderNumber: 'DESC' }, take: 1 }))[0] || { orderNumber: 0 };

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${employeeId} not found`);
    }

    if (!supplier) {
      throw new NotFoundException(`Supplier with ID ${supplierId} not found`);
    }

    const newOrderNumber = lastOrder ? lastOrder.orderNumber + 1 : 1;

    const newOrder = this.purchaseOrdersRepository.create({ ...createPurchaseOrderDto, orderNumber: newOrderNumber, employee, supplier });
    const savedOrder = await this.purchaseOrdersRepository.save(newOrder);

    const savedOrderDetails = await Promise.all(orderDetails.map(async detail => {
      const product = await this.productRepository.findOneBy({ id: detail.productId });
      if (!product) {
        throw new NotFoundException(`Product with ID ${detail.productId} not found`);
      }
      const orderDetail = this.purchaseOrderDetailsRepository.create({ ...detail, purchaseOrder: savedOrder, product });
      return this.purchaseOrderDetailsRepository.save(orderDetail);
    }));

    savedOrder.purchaseOrderDetails = savedOrderDetails;

    setImmediate(() => {
      this.sendOrderEmail(savedOrder);
    });

    return savedOrder;
  }

  async sendOrderEmail(order: PurchaseOrder) {
    const emailDetails = {
      email: order.supplier.email,
      supplierName: order.supplier.name,
      orderNumber: order.orderNumber,
      date: order.date,
      employeeName: order.employee.name,
      notes: order.notes,
      purchaseOrderDetails: order.purchaseOrderDetails.map(detail => ({
        productName: detail.product.name,
        quantity: detail.quantity,
        cost: detail.product.cost,
      })),
      total: order.purchaseOrderDetails.reduce((acc, detail) => acc + detail.quantity * detail.product.cost, 0),
    };
    await this.mailsService.send('purchase-order', 'Orden de Compra', emailDetails);
  }

  findAll() {
    return this.purchaseOrdersRepository.find({ relations: ['purchaseOrderDetails'] });
  }

  findOne(id: number) {
    return this.purchaseOrdersRepository.findOne({ where: { id }, relations: ['employee', 'supplier', 'purchaseOrderDetails', 'purchaseOrderDetails.product'] });
  }

  async update(id: number, updatePurchaseOrderDto: UpdatePurchaseOrderDto) {
    const order = await this.purchaseOrdersRepository.preload({ id, ...updatePurchaseOrderDto });
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return this.purchaseOrdersRepository.save(order);
  }

  async remove(id: number) {
    const order = await this.purchaseOrdersRepository.findOneBy({ id: id });
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return this.purchaseOrdersRepository.remove(order);
  }
}