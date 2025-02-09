import { Directive } from '@angular/core';
import { RedColorDirective } from './red-color.directive';
import { FontWeightDirective } from './font-weight.directive';

@Directive({
  selector: '[appStyle]',
  // Chain of Host Directives
  hostDirectives:[RedColorDirective, FontWeightDirective]
})
export class StyleDirective {

  constructor() { }

}
