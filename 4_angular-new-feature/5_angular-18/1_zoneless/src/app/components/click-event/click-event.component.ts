import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-click-event',
  template: `
    <div class="events">
      Number: {{ number }}
      <div>
        <button id="myButton">Increase number (Vanilla JS)</button>
        <button (click)="increaseNumber()">Increase number (Event Binding)</button>
      </div>
    </div>
    `,
  styles: [`
    .events {
      border: 1px dotted rgb(142, 142, 142);
      padding: 16px;
    }
    button {
      margin: 8px 8px 0 0;
    }   
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ClickEventComponent implements AfterViewInit, OnDestroy {
  number = 0;
  private _button: HTMLElement | null = null;
  private _cdr = inject(ChangeDetectorRef);
  
  ngAfterViewInit(): void {
    this.initEventListener();
  }

  ngOnDestroy(): void {
    this._button?.removeEventListener('click', () => {});
  }

  increaseNumber() {
    this.number += 1;
  }

  private initEventListener() {
    this._button = document.getElementById('myButton')
    this._button?.addEventListener('click', () => {
      console.log('button addEventListener clicked');
      this.increaseNumber();
      // this._cdr.detectChanges();
    });
  }

}
