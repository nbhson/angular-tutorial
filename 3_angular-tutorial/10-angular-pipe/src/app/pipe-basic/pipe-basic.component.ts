import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-basic',
  templateUrl: './pipe-basic.component.html',
  styleUrls: ['./pipe-basic.component.scss'],
})
export class PipeBasicComponent implements OnInit {
  content_1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quibusdam non sunt unde veritatis, itaque,
    facere nihil quasi dolor repellendus dolores atque illum alias error vitae.`;

  content_2 = `Học Angular 4`;
  content_3 = [`abc`, `xyz`, `def`, `123`, `456`];

  content_4 = 56.846;
  content_5 = 0.5864;

  content_6 = new Date();

  content_7 = {
      name: 'John',
      age: 30,
      city: 'New York'
  };

  constructor() {}

  ngOnInit(): void {}
}
