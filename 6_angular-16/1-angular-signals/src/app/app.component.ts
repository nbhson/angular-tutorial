import { Component, computed, signal, effect, untracked } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class AppComponent {
  counter = signal(0);
  counter2 = this.counter.asReadonly();
  derivedCounter = computed(() => {
    console.log('trigger computed');
    return this.counter() * 10;
  })
  effect = effect(() => {
    const currentCount = this.counter();
    const derivedCounter = this.derivedCounter();
    console.log(`current values: ${currentCount} ${derivedCounter}`);
  });

  constructor() {}

  increment() {
    console.log(`Updating counter...`)
    this.counter.set(this.counter() + 1);
  }
}
