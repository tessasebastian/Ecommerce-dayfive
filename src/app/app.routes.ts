import { Routes } from '@angular/router';
import { BrandsComponent } from './pages/brands/brands.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NykafashionComponent } from './pages/nykafashion/nykafashion.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    //{path:"",component:NavbarComponent},
    //{path:"brands",component:BrandsComponent},
    {path:"nykafashion",component:NykafashionComponent},
    {path:"products",component:ProductsComponent},
    {path:"",component:HomeComponent}
];
