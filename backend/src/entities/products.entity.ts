import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Categories } from "./categories.entity";
import { Images } from "./images.entity";
import { PackageTypes } from "./package-types.entity";
import { Suppliers } from "./suppliers.entity";

@Entity()
export class Products {

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

    @ManyToOne(() => Categories, category => category.products)
    category: Categories;

    @OneToMany(() => Images, image => image.product)
    images: Images[];

    @ManyToOne(() => PackageTypes, packageType => packageType.products)
    packageType: PackageTypes;

    @ManyToOne(()=> Suppliers, supplier => supplier.products)
    supplier: Suppliers;
}