import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart$ = new BehaviorSubject<CartItem[]>([]);
  cart$ = this._cart$.asObservable();
  constructor() { }

  addToCart(product: Product): void {
    const current = this._cart$.getValue();
    const item = current.find(cart => cart.product.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      current.push({
        product,
        quantity: 1
      });
    }
    this._cart$.next([...current]);
  }

}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Product {
  id: number
  name: string
}
