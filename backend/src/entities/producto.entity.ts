import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codigo_barra: string;

    @Column()
    sku: string;

    @Column()
    nombre: string;

    @Column()
    descripion: string;

    @Column()
    precio: number;

    @Column()
    descontinuado: boolean;

    @Column()
    se_vende: boolean;

    @Column()
    se_compra: boolean;

    @Column()
    stock_minimo: number;

    @Column()
    stock_maximo: number;

    @Column()
    embalaje: string;

    @Column()
    peso: number;

    @Column()
    ancho: number;

    @Column()
    alto: number;

    @Column()
    largo: number;

    @CreateDateColumn()
    creado: Date;

    @UpdateDateColumn()
    modificado: Date;

    // @ManyToOne(() => Categorias, categoria => categoria.productos)
    // categoria: Categorias[];
}
