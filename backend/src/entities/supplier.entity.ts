import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Supplier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rut: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    modified: Date;

    @OneToMany(()=> Product, product => product.supplier)
    products: Product[];
}