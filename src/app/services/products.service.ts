import { Injectable } from '@angular/core';
import { Product } from '../interfaces';
import { RouteConfigLoadEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any[] = []; // Initialize products as an empty array.
  constructor() {
    const storedProducts = localStorage.getItem('productss'); // Get item from localStorage
    if (storedProducts) {
      this.products = JSON.parse(storedProducts); // Parse it to an array and assign
    } else {
      this.products = []; // Default to empty array if no product in localStorage
    }
  }
  // Method to add a product
  addedProduct(product: any) {

    const newproduct = { ...product }
    this.products.push(newproduct);
    console.log('Updated Products:', this.products);
    localStorage.setItem("productss", JSON.stringify(this.products))
  }
  editProd(id: number, data: any) {
    console.log(data, "datadata", this.products)
    this.products[id] = data

  }
  deleteProd(i: number) {
    this.products.splice(i, 1)
    localStorage.setItem("productss", JSON.stringify(this.products))
  }
}
