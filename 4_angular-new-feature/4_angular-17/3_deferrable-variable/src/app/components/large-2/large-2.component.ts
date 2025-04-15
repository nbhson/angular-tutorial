import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-2',
  templateUrl: './large-2.component.html',
  styleUrls: ['./large-2.component.scss']
})
export class Large2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('On Init LargeComponent 2');
  }

}
