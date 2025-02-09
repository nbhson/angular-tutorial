import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-viewchild-dom-template',
  templateUrl: './viewchild-dom-template.component.html',
  styleUrls: ['./viewchild-dom-template.component.scss']
})
export class ViewchildDomTemplateComponent implements OnInit, AfterViewInit {

  @ViewChild('demoInput') demoInput: ElementRef
  @ViewChild('demoButton', { static: true }) demoButton: MatButton // chỉ có thể sử dụng static, khi element không nằm trong structual directive nào
  data: string

  constructor() { }

  ngOnInit(): void {
    console.log(this.demoInput); // undefined
    console.log(this.demoButton); // MatButton: lí do là có static = true
  }

  // khi ngAfterViewInit chạy thì mới sử dụng được DOM element
  ngAfterViewInit() {
    this.demoInput.nativeElement.value = ''
  }

  getData() {
    console.log(this.demoInput);
    console.log(this.demoButton);

    this.data = this.demoInput.nativeElement.value
  }

}
