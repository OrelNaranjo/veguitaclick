import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Warehouse } from "./warehouse.entity";

@Entity()
export class Movement {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'productId' })
    product: Product;

    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouseId' })
    warehouse: Warehouse;

    @Column({ type: 'enum', enum: ['in', 'out', 'sale', 'purchase'] })
    type: 'in' | 'out' | 'sale' | 'purchase';

    @Column()
    quantity: number;

    @Column({ type: 'timestamp' })
    date: Date;
}