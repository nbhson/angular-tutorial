import { Directive } from '@angular/core';

@Directive({
  selector: '[appRedcolor]',
  host: { style: 'color:red' },
  standalone: true
})
export class RedColorDirective {

  constructor() {}

}
