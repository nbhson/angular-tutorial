import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {

  myClass = {
    'color-custom': true,
    'shadow-custom': true,
    'font-size-custom': true
  }

  constructor() { }

  ngOnInit() {
  }

}
