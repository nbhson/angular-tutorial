import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-way-binding',
  templateUrl: './to-way-binding.component.html',
  styleUrls: ['./to-way-binding.component.scss']
})
export class ToWayBindingComponent implements OnInit {

  name: string
  age: number
  food: string

  constructor() { }

  ngOnInit(): void {
  }

}
