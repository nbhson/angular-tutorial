import { BeautifyNameDirective } from './beauty-name.directive';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild-directives',
  templateUrl: './viewchild-directives.component.html',
  styleUrls: ['./viewchild-directives.component.scss']
})
export class ViewchildDirectivesComponent implements OnInit {
  nameApp: string;

  @ViewChild(BeautifyNameDirective)
  set appBeautifyName(directive: BeautifyNameDirective) {
    this.nameApp = directive.name;
  };

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(this.nameApp); // htm
  }

}
