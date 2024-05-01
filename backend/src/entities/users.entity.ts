import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from 'typeorm';
import { Roles } from './roles.entity';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @ManyToMany(() => Roles)
    @JoinTable()
    roles: Roles[];
}