import { Directive, inject } from '@angular/core';
import { MY_TOKEN } from './constant.const';

@Directive({
  selector: '[appApp]'
})
export class AppDirective {
  token = inject(MY_TOKEN); // work

  constructor() { 
    console.log(this.token);
  }

}
