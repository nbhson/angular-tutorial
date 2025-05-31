import { Component, OnInit, SimpleChanges, ChangeDetectorRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { TodoDto } from 'src/api/todo.api';
import { User } from '../interface/user'

@Component({
  selector: 'app-b-component',
  templateUrl: './b-component.component.html',
  styleUrls: ['./b-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BComponentComponent implements OnInit {

  @Input() numberArr!: number[]
  @Input() user!: User
  @Input() soccer!: number
  @Input() todos!: TodoDto[]

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.warn('ngOnChanges', JSON.stringify(changes));
  }

  ngOnInit() {
  }

  ngDoCheck(): void {
    // this.cdr.markForCheck() // check ngược từ con lên cha
    // this.cdr.detectChanges() // check từ component hiện tại đi xuống những thằng child
  }

  click() {
  }

}
