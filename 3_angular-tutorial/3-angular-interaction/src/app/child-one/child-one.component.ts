import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  @Input('name') name: string
  @Input('age') age: string
  @Input('major') major: string
  @Input('married') married: string

  constructor() { }

  ngOnInit(): void {
  }

}
