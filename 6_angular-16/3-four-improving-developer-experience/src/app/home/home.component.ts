import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() id: string = '';
  @Input() contact: string = '';
  @Input() heroPower: string = '';

  constructor() { }

  ngOnInit() {
    console.log(this.id, this.contact, this.heroPower);
  }

}
