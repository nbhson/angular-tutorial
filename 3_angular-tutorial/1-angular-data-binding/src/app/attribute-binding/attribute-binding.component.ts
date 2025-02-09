import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.scss']
})
export class AttributeBindingComponent implements OnInit {

  tableWidth: number = 250
  tableBorder: number = 1

  constructor() { }

  ngOnInit(): void {
  }

}
