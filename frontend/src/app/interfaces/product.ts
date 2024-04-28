import { Category } from './category';
import { Image } from './image';
import { PackageType } from './package-type';
export interface Product {
    id: number;
    barcode: string;
    sku: string;
    name: string;
    description: string;
    price: number;
    cost: number;
    discontinued: boolean;
    is_selleable: boolean;
    is_purchase: boolean;
    min_stock: number;
    max_stock: number;
    weight: number;
    width: number;
    height: number;
    length: number;
    created: Date;
    modified: Date;
    category: Category;
    images: Image[];
    packageType: PackageType;
}