import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PurchaseOrder } from "./purchase-order.entity";
import { Product } from "./product.entity";

@Entity()
export class PurchaseOrderDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => PurchaseOrder, purchaseOrder => purchaseOrder.purchaseOrderDetails)
    @JoinColumn({ name: 'purchaseOrderId' })
    purchaseOrder: PurchaseOrder;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'productId' })
    product: Product;

    @Column()
    quantity: number;

}