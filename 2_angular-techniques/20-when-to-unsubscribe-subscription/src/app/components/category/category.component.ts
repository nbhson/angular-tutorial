import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, interval, mergeMap, scan } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  grandTotal$ = new Subject<number>();
  subscription = Subscription.EMPTY; // lưu lại subscription

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.grandTotal$.pipe(
      mergeMap(total => interval(1000).pipe(
        scan((acc, value) => acc + value, total),
      )),
    ).subscribe({
      next: grandTotal => {
        console.log(grandTotal);
      }
    });
  }

  ngOnDestroy() {
    console.log('Destroy Category');
    this.subscription.unsubscribe(); // call unsubscribe khi component OnDestroy
  }

  calculate(): void {
    this.grandTotal$.next(Math.random() * 1000);
  }

}
