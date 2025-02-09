import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-init-ng-on-destroy',
  templateUrl: './ng-on-init-ng-on-destroy.component.html',
  styleUrls: ['./ng-on-init-ng-on-destroy.component.scss']
})
export class NgOnInitNgOnDestroyComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.warn('OnInit');

  }

  ngOnDestroy() {
    console.warn('OnDestroy');
  }

}
