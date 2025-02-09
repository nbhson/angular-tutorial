import { Component, ContentChild, OnInit } from '@angular/core';
import { ItemsDirective } from '../directives/items.directive';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ContentChild(ItemsDirective) itemDirective: ItemsDirective;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.itemDirective.item); // hiển thị "item1"
  }

}
