import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  inputs: [
    { name: 'title', required: true },
    { name: 'count', required: true }
  ] // cách 2
})
export class CardComponent implements OnInit {
  @Input({ required: true }) title: string = ''; // cách 1

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
