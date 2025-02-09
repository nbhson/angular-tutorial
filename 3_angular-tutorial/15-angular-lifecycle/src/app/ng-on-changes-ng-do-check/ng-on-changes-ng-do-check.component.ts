import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes-ng-do-check',
  templateUrl: './ng-on-changes-ng-do-check.component.html',
  styleUrls: ['./ng-on-changes-ng-do-check.component.scss']
})
export class NgOnChangesNgDoCheckComponent implements OnInit {

  total: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  handleNumber(a: string, b: string) {
    this.total = parseInt(a) + parseInt(b)
  }

}
