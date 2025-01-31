import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'], // Fixed property name
})
export class ProductComponent {
  product: any[] = []; // Initialize products as an empty array
  isupdate: boolean = false
  updatedname: any;
  updateId!: number;
  updatedPrice: any
  constructor(private productsService: ProductsService) {

    this.product = this.productsService.products;

  }
  editProduct(product: any, id: number) {
    // this.productsService.editProd(product, id)
    this.updateId = id
    this.isupdate = true
    this.updatedname = product.name
    this.updatedPrice = product.price
    // this.productsService.editProd()

  }
  deleteProduct(i: number) {
    this.productsService.deleteProd(i)
  }
  upadateProducts() {
    const updatedData = { name: this.updatedname, price: this.updatedPrice, category: "Electronics", instock: true }
    this.productsService.editProd(this.updateId, updatedData)
  }
}