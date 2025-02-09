import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.scss']
})
export class InterpolationBindingComponent implements OnInit {

  user = {
    name: 'Son Nguyen',
    age: 23,
    isMarried: false,
    profession: 'IT',
    profile: 'https://google.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

  showProfession () {
    return this.user.profession
  }
}
