import { Product } from './product';
import { Category } from './category';
export interface Image {
    id: number;
    url: string;
    alt: string;
    product: Product;
    category: Category;
}