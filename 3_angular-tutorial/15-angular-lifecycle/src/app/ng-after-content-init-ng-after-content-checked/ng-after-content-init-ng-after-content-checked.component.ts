import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-after-content-init-ng-after-content-checked',
  templateUrl: './ng-after-content-init-ng-after-content-checked.component.html',
  styleUrls: ['./ng-after-content-init-ng-after-content-checked.component.scss']
})
export class NgAfterContentInitNgAfterContentCheckedComponent implements OnInit {

  myContent: string = 'ngContentInit value'

  constructor() { }

  ngOnInit(): void {
  }


  onChangeContent(value: any) {
    this.myContent = value
  }
}
