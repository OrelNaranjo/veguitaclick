import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Guide } from './guide.entity';
import { Product } from './product.entity';

@Entity()
export class GuideDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Guide, guide => guide.guideDetails)
    @JoinColumn({ name: 'guideId' })
    guide: Guide;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'productId' })
    product: Product;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @Column()
    cost: number;
}