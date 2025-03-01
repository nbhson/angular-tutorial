import { Component } from '@angular/core';
import { RedColorDirective } from '../directive/red-color.directive';
import { FontWeightDirective } from '../directive/font-weight.directive';

@Component({
  selector: 'app-testdirective',
  templateUrl: './testdirective.component.html',
  styleUrls: ['./testdirective.component.scss'],
  // Directive Composition API inside directives
  // hostDirectives:[RedColorDirective, FontWeightDirective]
})
export class TestDirectiveComponent {

}
