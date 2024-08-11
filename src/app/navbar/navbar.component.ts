import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandsComponent } from '../pages/brands/brands.component';
import { ProductsComponent } from '../pages/products/products.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
