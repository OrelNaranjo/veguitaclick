import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Privileges } from "./privileges.entity";
import { Users } from "./users.entity";

@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(() => Users, user => user.roles)
    users: Users[];

    @ManyToMany(() => Privileges, privilege => privilege.roles)
    @JoinTable()
    privileges: Privileges[];
}