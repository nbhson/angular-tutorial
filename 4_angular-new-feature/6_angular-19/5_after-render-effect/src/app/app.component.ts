import { afterRender, afterRenderEffect, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  counter = signal(0);
  number = 0;

  constructor() {
    afterRenderEffect(() => {
      console.log('after render effect', this.counter());
    })

    afterRender(() => {
      console.log('after render', this.counter())
    })
  }

  updateSignal() {
    this.counter.update(value => value + 1);
    console.log('update view', this.counter());
  }

  updateNumber() {
    this.number++;
    console.log('update number', this.number);
  }
}
