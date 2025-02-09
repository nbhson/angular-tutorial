import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  imgWidth: number = 250
  imgLink: string = 'https://kenh14cdn.com/2019/2/24/243274223900552214242885258065423810691072n-15510057259421664638280.jpg'
  inputPlaceholder: string = 'Ex. Pizza'
  inputValue: string = 'Sushi'


  constructor() { }

  ngOnInit(): void {
  }

}
