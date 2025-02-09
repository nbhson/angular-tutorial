import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child-ng-after-init',
  templateUrl: './child-ng-after-init.component.html',
  styleUrls: ['./child-ng-after-init.component.scss'],
})
export class ChildNgAfterInitComponent
  implements OnInit, AfterContentInit, AfterContentChecked {

  @ContentChild('my-class') contentChild: ElementRef
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.warn('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.warn('ngAfterContentChecked')
  }
}
