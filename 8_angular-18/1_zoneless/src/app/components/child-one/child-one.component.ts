import { JsonPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe, NgFor]
})
export class ChildOneComponent {
  @Input() user: any;
  @Input() todos: any;
  // counter = input.required<number>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  // ngAfterViewChecked(): void {
  //   this.cdr.markForCheck()    
  // }
}
