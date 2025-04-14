import { ChangeDetectionStrategy, Component, Input, NgZone, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-interval',
  template: `
  <div class="interval">
    <div>Simple property set asynchronously</div>
    <div>Tick: {{ tick }}</div>
  </div>
  `,
  styles: [`
    .interval {
      border: 1px solid rgb(142, 142, 142);
      padding: 16px;
      margin-top: 16px;
    } 
    button {
      margin-top: 8px;
    }   
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class IntervalComponent implements OnChanges {
  @Input({required: true}) tick = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
