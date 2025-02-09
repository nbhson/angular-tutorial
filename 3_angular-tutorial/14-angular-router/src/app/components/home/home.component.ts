import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  key: string = ''
  errMess: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  access() {
    if (this.key === 'admin') {
      localStorage.setItem('key', this.key)
      this.errMess = ''
    } else {
      this.errMess = 'Key is incorrect !'
    }
  }

}
