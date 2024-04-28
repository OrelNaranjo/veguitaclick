import { Routes } from '@angular/router';

import { HomeComponent } from './pages/system/home/home.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { Page404Component } from './pages/system/page404/page404.component';
import { ProductComponent } from './pages/product/product/product.component';
import { SupplierListComponent } from './pages/supplier/supplier-list/supplier-list.component';
import { SupplierComponent } from './pages/supplier/supplier/supplier.component';
import { SupplierDetailComponent } from './pages/supplier/supplier-detail/supplier-detail.component';


export const routes: Routes = [
    // Rutas de productos
    { path: 'home', component: HomeComponent },
    { path: '404', component: Page404Component},
    { path: 'products', component: ProductListComponent },
    { path: 'product/new', component: ProductComponent },
    { path: 'product/:id/edit', component: ProductComponent },
    { path: 'product/:id/view', component: ProductDetailComponent},

    //Rutas proveedores
    { path: 'suppliers', component: SupplierListComponent },
    { path: 'suppliers/new', component: SupplierComponent },
    { path: 'suppliers/:id/edit', component: SupplierComponent },
    { path: 'suppliers/:id/view', component: SupplierDetailComponent},


    // Ruta por defecto
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '404' }

];
