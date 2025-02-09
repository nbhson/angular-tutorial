import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  folders: Array<string> = ['Documents', 'Music', 'Game'];

  constructor() { }

  ngOnInit(): void {
  }

}
