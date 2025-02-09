import { Product } from '../models/product.class';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'Samsung galaxy A10', 7500000, true),
    new Product(2, 'Iphone 2020', 45000000, true),
    new Product(3, 'Oppo A15', 311000, true),
  ];

  constructor() {}

  getAllProducts(id?: number, name?: string): Product[] {
    let products: Product[] = this.products
    if (name) {
      products = this.products.filter((x) => {
        return x.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
      });
    }
    if (id) {
      products = this.products.filter((x) => {
        return x.id === id;
      });
    }

    return products;
  }

  getProductById(id: number): Product {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return this.products[i];
      }
    }
    return null;
  }
}
