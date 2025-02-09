import { Component, OnInit, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { CartService } from '../getter.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-rxjs-interoperability',
  templateUrl: './rxjs-interoperability.component.html',
  styleUrls: ['./rxjs-interoperability.component.css'],
  standalone: true,
  imports: [
    JsonPipe
  ]
})
export class RxjsInteroperabilityComponent implements OnInit {
  count = signal(0);
  count$ = toObservable(this.count); //signal change sẽ subscribe một 1 lần

  dataService = inject(CartService);
  data = toSignal<string>(this.dataService.getName());

  constructor() { }

  ngOnInit() {
    this.count$.subscribe(console.log);
  }

  incrementCount() {
    this.count.set(this.count() + 1);
  }
}
