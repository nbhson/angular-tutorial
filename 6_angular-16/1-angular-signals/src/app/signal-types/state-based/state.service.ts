import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _count = new BehaviorSubject<number>(0);
  count$ = this._count.asObservable();

  increment() {
    const currentValue = this._count.value;
    this._count.next(currentValue + 1);
  }

  decrement() {
    const currentValue = this._count.value;
    this._count.next(currentValue - 1);
  }

}
