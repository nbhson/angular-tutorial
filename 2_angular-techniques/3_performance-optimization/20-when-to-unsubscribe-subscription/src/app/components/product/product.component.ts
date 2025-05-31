import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  grandTotal$ = new Subject<number>();
  constructor() { }

  ngOnInit(): void {
    this.grandTotal$.subscribe({
      next: grandTotal => {
        console.log(grandTotal);
      }
    });
  }

  ngOnDestroy() {
    console.log('Destroy ProductComponent');
  }

  calculate(): void {
    this.grandTotal$.next(Math.random() * 1000);
  }

}
