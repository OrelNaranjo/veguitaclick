import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Privileges } from "./privileges.entity";
import { User } from "./user.entity";

@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(() => User, user => user.roles)
    users: User[];

    @ManyToMany(() => Privileges, privilege => privilege.roles)
    @JoinTable()
    privileges: Privileges[];
}