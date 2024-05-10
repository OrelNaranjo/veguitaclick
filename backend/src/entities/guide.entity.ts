import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Warehouse } from './warehouse.entity';
import { GuideDetail } from './guide-detail.entity';
import { Employee } from './employee.entity';
import { Store } from './store.entity';

@Entity()
export class Guide {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: string;

    @Column({ type: 'enum', enum: ['warehouse', 'store'] })
    sourceType: 'warehouse' | 'store';

    @Column({ type: 'enum', enum: ['in', 'out'] })
    type: 'in' | 'out';

    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouseId' })
    warehouse: Warehouse

    @ManyToOne(() => Store)
    @JoinColumn({ name: 'storeId' })
    store: Store

    @ManyToOne(() => Employee)
    @JoinColumn({ name: 'createdById' })
    createdBy: Employee

    @ManyToOne(() => Employee)
    @JoinColumn({ name: 'assignedToId' })
    assignedTo: Employee

    @Column()
    notes: string;

    @Column({ type: 'date' })
    date: Date;

    @OneToMany(() => GuideDetail, guideDetail => guideDetail.guide)
    guideDetails: GuideDetail[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}