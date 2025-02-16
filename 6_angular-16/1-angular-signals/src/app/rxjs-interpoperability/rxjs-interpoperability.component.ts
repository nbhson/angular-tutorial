import { Component, DestroyRef, OnInit } from '@angular/core';
import { ReplaySubject, interval, takeUntil } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-rxjs-interpoperability',
  templateUrl: './rxjs-interpoperability.component.html',
  styleUrls: ['./rxjs-interpoperability.component.css'],
  standalone: true,
  imports: [HttpClientModule]
})
export class RxjsInterpoperabilityComponent implements OnInit {
  destroyed$ = new ReplaySubject<void>(1);
  data$: any

  constructor(private destroyRef: DestroyRef) { }

  ngOnInit() {
    // this.data$ = interval(1000).pipe(takeUntil(this.destroyed$)); // cách 1
    this.data$ = interval(1000).pipe(takeUntilDestroyed(this.destroyRef)); // cách 2 ngắn hơn

    this.data$.subscribe((data: any) => {
      console.log(data);
    });
    

    this.destroyRef.onDestroy(() => {
      console.log('destroyRef');
    })
  }

  ngOnDestroy() {
    // this.destroyed$.next(); // cách 1 dùng next để takeUntil hoạt động
  }

}
