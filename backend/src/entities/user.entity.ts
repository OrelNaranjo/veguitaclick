import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from 'typeorm';
import { Roles } from './roles.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    username: string;

    @Column({ length: 100 })
    email: string;

    @Column()
    password: string;

    @ManyToMany(() => Roles, role => role.users)
    @JoinTable()
    roles: Roles[];
}