import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { TicketDetail } from './ticket-detail.entity';

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp' })
    date: Date;

    @OneToMany(() => TicketDetail, ticketDetail => ticketDetail.ticket)
    ticketDetails: TicketDetail[];
}