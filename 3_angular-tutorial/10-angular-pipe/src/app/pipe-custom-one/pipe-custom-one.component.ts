import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-custom-one',
  templateUrl: './pipe-custom-one.component.html',
  styleUrls: ['./pipe-custom-one.component.scss']
})
export class PipeCustomOneComponent implements OnInit {

  content: string =
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Alias magni suscipit magnam,
  deserunt saepe quasi maxime velit officiis optio
  corrupti quidem possimus nam sapiente nemo.`

  constructor() { }

  ngOnInit(): void {
  }

}
