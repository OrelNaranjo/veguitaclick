import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, Unique, CreateDateColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { PurchaseOrderDetail } from './purchase-order-detail.entity';
import { Supplier } from './supplier.entity';

@Unique(['orderNumber'])
@Entity()
export class PurchaseOrder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orderNumber: number;

    @ManyToOne(() => Employee)
    @JoinColumn({ name: 'employeeId' })
    employee: Employee;

    @ManyToOne(() => Supplier)
    @JoinColumn({ name: 'supplierId' })
    supplier: Supplier;

    @Column()
    notes: string;

    @CreateDateColumn()
    date: Date;

    @OneToMany(() => PurchaseOrderDetail, purchaseOrderDetail => purchaseOrderDetail.purchaseOrder)
    purchaseOrderDetails: PurchaseOrderDetail[];
}
