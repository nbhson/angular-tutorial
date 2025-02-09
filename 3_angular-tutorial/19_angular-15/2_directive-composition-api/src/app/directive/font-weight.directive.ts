import { Directive } from '@angular/core';

@Directive({
  selector: '[appFontWeight]',
  host: { style: 'font-weight:bold' },
  standalone: true
})
export class FontWeightDirective {

  constructor() { }

}
