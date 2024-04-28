import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Products } from "./products.entity";

@Entity()
export class Suppliers {

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

    @OneToMany(()=> Products, product => product.supplier)
    products: Products[];

    


}