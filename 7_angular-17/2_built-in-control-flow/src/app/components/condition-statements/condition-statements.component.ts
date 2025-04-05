import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition-statements',
  templateUrl: './condition-statements.component.html',
  styleUrls: ['./condition-statements.component.scss'],
  standalone: true
})
export class ConditionStatementsComponent implements OnInit {

  a = 1;
  b = 2;

  user = {
    name: 'Son',
    age: 17,
    more: {
      height: 169,
      weight: 52
    }
  }

  items = [
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
  ]

  constructor() { }

  ngOnInit() {
  }

}
