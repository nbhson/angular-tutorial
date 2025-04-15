import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    JsonPipe,
  ]
})
export class HomeComponent implements OnInit {

  languages = ['JS', 'C#', 'JAVA'];

  constructor() { }

  ngOnInit() {
  }

}
