import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from './product.entity';
import { Category } from './category.entity';

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    alt: string;

    @ManyToOne(() => Product, product => product.image, { nullable: true })
    product: Product;

    @ManyToOne(() => Category, category => category.image, { nullable: true })
    category: Category;
}