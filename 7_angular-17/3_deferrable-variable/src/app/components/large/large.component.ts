import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-large',
  templateUrl: './large.component.html',
  styleUrls: ['./large.component.scss'],
  standalone: true
})
export class LargeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('On Init LargeComponent');
  }

}
