import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity()
@Unique(['run'])
@Unique(['email'])
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    run: string;

    @Column()
    name: string;

    @Column()
    position: string;

    @Column({ type: 'date' })
    birthDate: Date;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column({ type: 'enum', enum: ['indefinite', 'fixed-term', 'part-time', 'full-time', 'fees'] })
    contractType: string;

    @Column()
    contractNumber: number;

    @Column({ type: 'date' })
    hireDate: Date;

    @Column({ type: 'date', nullable: true  })
    firedDate: Date;

    @Column('decimal', { precision: 10, scale: 2 })
    salary: number;

    @ManyToOne(() => Employee, employee => employee.supervisor, { nullable: true })
    @JoinColumn({ name: 'supervisorId' })
    supervisor: Employee;

    @OneToMany(() => Employee, employee => employee.supervisor, { nullable: true })
    subordinates: Employee[];

    @Column({ type: 'enum', enum: ['hired', 'fired']})
    status: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
