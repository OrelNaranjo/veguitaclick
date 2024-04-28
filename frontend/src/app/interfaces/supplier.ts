import { Product } from './product';
export interface Supplier {
    id: number; 
    rut: string;
    name: string;
    address: string;
    email: string;
    phone: string;
    created: Date;
    modified: Date;
    product: Product[];
}