import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  observer = {
    next: (users: User[]) => {
      this.users = users
    },
    error: (error: any) => {
      console.error(error)
    },
    complete: () => {

    }
  }

  users!: User[];
  selectedUser!: User

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this._dataService.getUsers().subscribe(this.observer)
  }

  selectUser(user: User) {
    this.selectedUser = user.cloneUser();
  }

  create() {
    this.selectedUser = User.createBlank();
  }

  save(user: User) {
    // save user and update on table
    console.log(user);
  }

}
