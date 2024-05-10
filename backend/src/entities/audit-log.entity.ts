import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class AuditLog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tableName: string;

    @Column()
    action: string;

    @Column()
    recordId: number;

    @Column({ type: 'jsonb' })
    oldValue: any;

    @Column({ type: 'jsonb' })
    newValue: any;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User;

    @CreateDateColumn()
    createdAt: Date;
}
