import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Store {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    address: string;

    @Column()
    phone: string;
}