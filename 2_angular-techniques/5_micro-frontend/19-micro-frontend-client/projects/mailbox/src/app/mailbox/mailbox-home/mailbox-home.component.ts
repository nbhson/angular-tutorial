import { Component, OnInit } from '@angular/core';
import { UserService } from 'projects/shell/src/app/services/user.service';

@Component({
  selector: 'app-mailbox-home',
  templateUrl: './mailbox-home.component.html',
  styleUrls: ['./mailbox-home.component.scss']
})
export class MailboxHomeComponent implements OnInit {

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
