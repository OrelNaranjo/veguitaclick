import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Invoice } from './invoice.entity';
import { Product } from './product.entity';

@Entity()
export class InvoiceDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Invoice, invoice => invoice.invoiceDetails)
    @JoinColumn({ name: 'invoiceId' })
    invoice: Invoice;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'productId' })
    product: Product;

    @Column()
    quantity: number;

    @Column()
    price: number;
}