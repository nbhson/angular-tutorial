import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../shell/src/app/services/user.service';

@Component({
  selector: 'app-calendar-home',
  templateUrl: './calendar-home.component.html',
  styleUrls: ['./calendar-home.component.scss']
})
export class CalendarHomeComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

  updateUser() {
    this._userService.addUser()
  }

  getUsers() {
    this._userService.getUsers();
  }
}
