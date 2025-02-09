import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-radiobutton',
  templateUrl: './checkbox-radiobutton.component.html',
  styleUrls: ['./checkbox-radiobutton.component.scss']
})
export class CheckboxRadiobuttonComponent implements OnInit {

  checked = false;
  indeterminate = false;

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  constructor() { }

  ngOnInit(): void {
  }

}
