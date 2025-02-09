import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  isShow: boolean = true
  radioValue: boolean = false

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isShow = !this.isShow
  }

  radioChange(value) {
    if (value === true) {
      this.radioValue = true
    } else {
      this.radioValue = false
    }
  }

}
