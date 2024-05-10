import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Ticket } from "./ticket.entity";

@Entity()
export class TicketDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Ticket, ticket => ticket.ticketDetails)
    @JoinColumn({ name: 'ticketId' })
    ticket: Ticket;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'productId' })
    product: Product;

    @Column()
    quantity: number;

    @Column()
    price: number;
}