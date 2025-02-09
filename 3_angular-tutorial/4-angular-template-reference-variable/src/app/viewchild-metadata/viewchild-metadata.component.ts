import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild-metadata',
  templateUrl: './viewchild-metadata.component.html',
  styleUrls: ['./viewchild-metadata.component.scss']
})
export class ViewchildMetadataComponent implements OnInit, AfterViewInit {
  /**
   * Khi thêm option {read: ElementRef} thì chúng ta đã xem component về mặt template với cấu trúc DOM
   * chứ không còn nhìn vào các thành phần bên trong component của nó chứa các method hay thuộc tính nào nữa.
   */
  @ViewChild('primaryColorSample', { read: ElementRef }) color: ElementRef;
  primary: string = '1976d2'
  ref: any

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.ref = this.color.nativeElement
    console.log(this.color.nativeElement);
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}
