import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Warehouse } from './warehouse.entity';
import { Store } from './store.entity';
import { Employee } from './employee.entity';

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: ['warehouse', 'store'] })
    sourceType: 'warehouse' | 'store';

    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouseId' })
    warehouse: Warehouse;

    @ManyToOne(() => Store)
    @JoinColumn({ name: 'storeId' })
    store: Store;

    @ManyToOne(() => Employee)
    @JoinColumn({ name: 'employeeId' })
    employee: Employee;

    @Column({ type: 'date' })
    date: Date;
}
