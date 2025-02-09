import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {

  @Input() navs: Array<string>;
  @Input() navLink: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
