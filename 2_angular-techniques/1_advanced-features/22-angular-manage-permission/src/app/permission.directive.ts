import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { PermissionService } from './permission.service';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {
  @Input('appPermission') permission!: string;
  @Input('appModule') moduleName!: string;

  constructor(private permissionService: PermissionService, private elementRef: ElementRef) {}

  ngOnInit() {
    if (!this.permissionService.hasPermission(this.moduleName, this.permission)) {
      this.elementRef.nativeElement.disabled = true;
    }
  }
}
