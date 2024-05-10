import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { InvoiceDetail } from './invoice-detail.entity';

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp' })
    date: Date;

    @OneToMany(() => InvoiceDetail, invoiceDetail => invoiceDetail.invoice)
    invoiceDetails: InvoiceDetail[];
}