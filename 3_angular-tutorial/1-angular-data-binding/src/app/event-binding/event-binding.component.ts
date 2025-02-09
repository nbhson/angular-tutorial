import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  number: number = 0
  valueKeyup: string = ''
  valueEnter: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(e) {
    console.log(e.target.innerHTML)
  }

  summation() {
    this.number += 1
  }

  KeyupEvent (event) {
    this.valueKeyup = event.target.value
  }

  EnterEvent (event) {
    this.valueEnter = event.target.value
  }
}
