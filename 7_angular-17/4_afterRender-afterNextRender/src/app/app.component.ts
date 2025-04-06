import { afterRender, Component, computed, ElementRef, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { animationFrameScheduler, interval, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [FormsModule],
})
export class AppComponent {
  secretWord = signal('angular18');
  word = signal('');
  success = computed(() => this.secretWord() === this.word());
  wordBlock = viewChild<ElementRef>('wordBlock');
  subscriptions: Subscription[] = [];

  counter = 0;

  constructor() {
    afterRender({
      write: () => {
        this.wordBlock()!.nativeElement.style.backgroundColor = this.success()
          ? 'green'
          : 'red';

        this.subscriptions.push(
          interval(0, animationFrameScheduler)
            .pipe(take(10))
            .subscribe({
              next: (percentage) => {
                console.log(percentage);
                this.wordBlock()!.nativeElement.style.width = percentage + '%';
              },
              complete: () => {
                console.log('complete');
                this.subscriptions.forEach((subs) => subs.unsubscribe());
              }
            })
        );
      },
      read: (data) => {
        console.log(data);
      },
      mixedReadWrite: (data) => {
        console.log(data);
      },
    });


  //   afterNextRender({
  //     mixedReadWrite: () => {
  //       this._resizeObserver = new ResizeObserver(() => {
  //         if (this.counter === 20) {
  //           this._resizeObserver?.disconnect();
  //           this._resizeObserver = null;
  //         }
  //         console.log('WINDOW RESIZED!');
  //         this.counter++;
          
  //       });
  //       this._resizeObserver.observe(this.resize()!.nativeElement);
  //     }
  //   });
  // }
  }
}
