import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-after-view-ng-after-view-checked',
  templateUrl: './ng-after-view-ng-after-view-checked.component.html',
  styleUrls: ['./ng-after-view-ng-after-view-checked.component.scss']
})
export class NgAfterViewNgAfterViewCheckedComponent implements OnInit, AfterViewInit, AfterViewChecked {

  products: any[] = [
    {
      id: 1,
      name: 'Iphone 7'
    },
    {
      id: 2,
      name: 'Iphone 8'
    },
    {
      id: 3,
      name: 'Iphone 9'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.warn('ngAfterViewInit')
  }

  ngAfterViewChecked() {
    console.warn('ngAfterViewChecked')
  }

  push(value) {
    this.products.push({id: this.products.slice(-1).pop().id +1, name: value})
  }
}
