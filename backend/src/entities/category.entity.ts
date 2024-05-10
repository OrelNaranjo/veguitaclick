import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { Product } from "./product.entity";
import { Image } from "./image.entity";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    is_active: boolean;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    modified: Date;

    @OneToMany(() => Product, product => product.category)
    products: Product[];

    @OneToMany(() => Image, image => image.category)
    image: Image[];

    @Column({ nullable: true })
    parentId: number;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "parentId" })
    parentCategory: Category;
}