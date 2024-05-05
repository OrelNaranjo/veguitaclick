import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code_bar: string;

    @Column()
    sku: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    discontinued: boolean;

    @Column()
    is_sell: boolean;

    @Column()
    is_buy: boolean;

    @Column()
    min_stock: number;

    @Column()
    max_stock: number;

    @Column()
    packaging: string;

    @Column()
    weight: number;

    @Column()
    width: number;

    @Column()
    height: number;

    @Column()
    length: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    modified: Date;

    // @ManyToOne(() => Categories, category => category.products)
    // category: Categories[];
}