import { flatten } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // child one
  name: string = 'Son Nguyen';
  age: number = 20;
  major: string = 'IT';
  married: boolean = false;

  // child two
  users: any[] = [
    {
      id: 1,
      name: 'Sơn',
      age: '23',
    },
    {
      id: 2,
      name: 'Trinh',
      age: '23',
    },
    {
      id: 3,
      name: 'Linh',
      age: '22',
    },
  ];

  // child three
  movieName: string = 'Godzilla'
  movieTime: string = '2h30'

  // child four
  addUser(user) {
    this.users.push(user)
  }
}
