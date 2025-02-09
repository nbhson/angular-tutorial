import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appItems]'
})
export class ItemsDirective {
  @Input() item: string;

  constructor() { }


}
