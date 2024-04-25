import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { Products } from "./products.entity";
import { Images } from "./images.entity";

@Entity()
export class Categories {

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

    @OneToMany(() => Products, product => product.category)
    products: Products[];

    @OneToMany(() => Images, image => image.category)
    images: Images[];

    @Column({ nullable: true })
    parentId: number;

    @ManyToOne(() => Categories)
    @JoinColumn({ name: "parentId" })
    parentCategory: Categories;
}