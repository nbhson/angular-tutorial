import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  myName: string = 'Son Nguyen'

  constructor() { }

  ngOnInit(): void {
  }

  whoAmI(): string {
    return 'I am supper hero!';
  }

}
