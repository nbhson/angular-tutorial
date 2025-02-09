
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CartService } from '../getter.service';
@Component({
  selector: 'app-getter-changes',
  templateUrl: './getter-changes.component.html',
  styleUrls: ['./getter-changes.component.css']
})
export class GetterChangesComponent implements OnInit {
  @ViewChild('input', { static: true }) inputElementRef!: ElementRef;

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  changePrice() {
    this.cartService.price = this.inputElementRef.nativeElement.value;
  }

  get price() {
    return this.cartService.exPrice;
  }
}
