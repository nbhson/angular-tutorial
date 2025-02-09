import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public item = 'Iphone 14 ProMax';
  public price = 26450000;
  public quantity = 2;

  constructor() {}

  get exPrice() {
    return this.price * this.quantity;
  }

  getName() {
    return of(this.item);
  }
}
