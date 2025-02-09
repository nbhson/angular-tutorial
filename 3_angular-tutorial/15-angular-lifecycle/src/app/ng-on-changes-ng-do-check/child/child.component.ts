import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input() total: number
  previous: number

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChange: SimpleChanges) {
    console.warn('OnChanges');
    this.previous = simpleChange.total.previousValue
  }

  ngDoCheck() {
    console.warn('DoCheck');
  }
}
