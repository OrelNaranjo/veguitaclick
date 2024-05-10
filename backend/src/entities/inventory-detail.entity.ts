import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';
import { Inventory } from './inventory.entity';

@Entity()
export class InventoryDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Inventory)
    @JoinColumn({ name: 'inventoryId' })
    inventory: Inventory;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'productId' })
    product: Product;

    @Column()
    quantity: number;
}