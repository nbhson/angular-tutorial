import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {

  myStyle = {
    'color': 'green',
    'font-weight': 'bold',
    'font-style': 'italic',
    'font-size': '20px'
  }

  constructor() { }

  ngOnInit() {
  }

}
