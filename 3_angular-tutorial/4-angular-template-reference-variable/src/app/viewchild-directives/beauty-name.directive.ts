import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[appBeautifyName]' })
export class BeautifyNameDirective {
  name = 'htm';

  constructor(elem: ElementRef, renderer: Renderer2) {
    let name = renderer.createText('htm');
    renderer.appendChild(elem.nativeElement, name);
  }
}
