import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Products } from './products.entity';
import { Categories } from './categories.entity';

@Entity()
export class Images {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    alt: string;

    @ManyToOne(() => Products, product => product.images)
    product: Products;

    @ManyToOne(() => Categories, category => category.images)
    category: Categories;
}