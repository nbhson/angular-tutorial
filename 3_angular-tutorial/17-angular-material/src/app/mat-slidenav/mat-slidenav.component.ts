import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-slidenav',
  templateUrl: './mat-slidenav.component.html',
  styleUrls: ['./mat-slidenav.component.scss']
})
export class MatSlidenavComponent implements OnInit {

  opened = false;

  constructor() { }

  ngOnInit(): void {
  }

  openedSide(){
    this.opened = !this.opened;
  }

}
