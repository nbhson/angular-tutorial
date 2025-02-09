import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-custom-three',
  templateUrl: './pipe-custom-three.component.html',
  styleUrls: ['./pipe-custom-three.component.scss']
})
export class PipeCustomThreeComponent implements OnInit {

  arr: Array<number> = [5,2,3,6,4,1,9,8]
  value: number = 1

  constructor() { }

  ngOnInit(): void {
  }

  handleValue(value) {
    return this.value = value
  }

}
