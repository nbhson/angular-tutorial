import { Component, OnInit } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'app-state-based',
  templateUrl: './state-based.component.html',
  styleUrls: ['./state-based.component.css']
})
export class StateBasedComponent implements OnInit {
  count: number = 0;

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateService.count$.subscribe(count => {
      this.count = count;
    });
  }

  increment() {
    this.stateService.increment();
  }

  decrement() {
    this.stateService.decrement();
  }

}
