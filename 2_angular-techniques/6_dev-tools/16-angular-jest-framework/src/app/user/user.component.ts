import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { IUser } from '../model/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users!: IUser[];
  errorMessage!: string;
  status!: string;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this._userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.setStatus();
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    })
  }

  setStatus() {
    if (this.users.length === 0) {
      this.status = 'No thing else!';
    } else if (this.users.length === 1) {
      this.status = 'Good day!';
    } else {
      this.status = 'Amazing good job!';
    }
  }
}
