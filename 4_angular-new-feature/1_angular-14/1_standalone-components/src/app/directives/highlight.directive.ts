import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HightlightDirective {

  color!: string;

  @Input() highlight!: boolean;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightFn(this.highlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlightFn(false);
  }

  constructor(private el: ElementRef) { }

  private highlightFn(highlight: any) {
    if (highlight) {
      this.el.nativeElement.style.boxShadow = '10px 15px 30px white';
      this.el.nativeElement.style.cursor = 'pointer';
    } else {
      this.el.nativeElement.style.boxShadow = 'none';
    }
  }

}
