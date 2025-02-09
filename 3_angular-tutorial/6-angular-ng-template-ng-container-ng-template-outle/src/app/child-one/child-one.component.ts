import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  @Input() template: TemplateRef<any>;

  constructor() { }

  ngOnChanges() {
    console.log(this.template);
  }

  ngOnInit() {
  }

}
