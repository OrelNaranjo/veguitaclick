import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { ProductComponent } from './pages/product/product/product.component';
import { ProductAddComponent } from './pages/product/product-add/product-add.component';

export const routes: Routes = [
    // Rutas de productos
    { path: 'productos', component: ProductListComponent },
    { path: 'producto/:id', component: ProductComponent },
    { path: 'producto/add', component: ProductAddComponent},
    { path: 'producto/edit/:id', component: ProductAddComponent},

    // Ruta por defecto
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', redirectTo: '/' }

];
