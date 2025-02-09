import { ChildComponent } from './child/child.component';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild-dom-component',
  templateUrl: './viewchild-dom-component.component.html',
  styleUrls: ['./viewchild-dom-component.component.scss'],
})
export class ViewchildDomComponentComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildComponent) child: ChildComponent;

  functionFromChild: string;
  variableFromChild: string;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    // console.log(this.child.myName); // error
    // console.log(this.child.whoAmI()); // error
  }

  ngAfterViewInit() {
    this.variableFromChild = this.child.myName;
    this.functionFromChild = this.child.whoAmI();
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}
