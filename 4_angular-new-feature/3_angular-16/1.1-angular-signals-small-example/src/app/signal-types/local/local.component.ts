import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent {
  @ViewChild('input', { static: true }) inputElementRef!: ElementRef;

  @Output() productAdded = new EventEmitter<string>();

  sendProduct() {
    this.productAdded.emit(this.inputElementRef.nativeElement.value);
  }
}
