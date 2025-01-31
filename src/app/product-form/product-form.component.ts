import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "../product/product.component";
import { RouteConfigLoadEnd } from '@angular/router';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductComponent],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
  providers: [ProductsService],
})
export class ProductFormComponent {
  constructor(private service: ProductsService) {

  }
  product = {
    name: '',
    price: 0,
    category: 'Eletronics',
    instock: false
  }

  onSubmit() {
    // console.log(this.product)
    this.service.addedProduct(this.product)
  }
}
