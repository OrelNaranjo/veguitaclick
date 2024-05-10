import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { Category } from "./category.entity";
import { Image } from "./image.entity";
import { PackageType } from "./package-type.entity";
import { Supplier } from "./supplier.entity";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    barcode: string;

    @Column()
    sku: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    cost: number;

    @Column()
    discontinued: boolean;

    @Column()
    is_selleable: boolean;

    @Column()
    is_purchase: boolean;

    @Column()
    min_stock: number;

    @Column()
    max_stock: number;

    @Column()
    weight: number;

    @Column()
    width: number;

    @Column()
    height: number;

    @Column()
    length: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    modified: Date;

    @ManyToOne(() => Category, category => category.products)
    category: Category;

    @OneToMany(() => Image, image => image.product)
    image: Image[];

    @ManyToOne(() => PackageType, packageType => packageType.products)
    packageType: PackageType;

    @ManyToOne(()=> Supplier, supplier => supplier.products)
    supplier: Supplier;
}