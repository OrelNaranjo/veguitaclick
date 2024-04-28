import { Image } from './image';
import { Product } from './product';
export interface Category {
    id: number;
    name: string;
    description: string;
    is_active: boolean;
    created: Date;
    modified: Date;
    products: Product[];
    images: Image[];
    parentId: number | null;
    parentCategory: Category | null;
}