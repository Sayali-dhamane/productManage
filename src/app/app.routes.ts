import { Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: 'product', component: ProductComponent }, // Default route
    { path: '', component: ProductFormComponent },
];
