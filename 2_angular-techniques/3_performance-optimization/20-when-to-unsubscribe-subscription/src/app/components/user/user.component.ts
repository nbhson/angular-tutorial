import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { CartItem, CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  subscription = Subscription.EMPTY;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.cartService.cart$.subscribe(new ProductCartSubscriber());
  }

  ngOnDestroy() {
    console.log('Destroy UserComponent');
    this.subscription.unsubscribe();
  }

}

// sử dụng class để hỗ trợ profiler dễ dàng hơn
class ProductCartSubscriber extends Subscriber<CartItem[]>{
  override next(cartItems: CartItem[]): void {
    console.log(cartItems);
  }
}
