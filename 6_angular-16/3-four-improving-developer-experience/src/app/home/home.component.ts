import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  @Input() id: string = '';
  @Input() contact: string = '';
  @Input() heroPower: string = '';
  
  constructor(route: ActivatedRoute) {
    route.params.subscribe((params) => console.log(params['id']));
  } 

  ngOnInit() {
    console.log(this.id, this.contact, this.heroPower);
  }

  ngOnChanges() {
    console.log(this.id, this.contact, this.heroPower);
  }

}
