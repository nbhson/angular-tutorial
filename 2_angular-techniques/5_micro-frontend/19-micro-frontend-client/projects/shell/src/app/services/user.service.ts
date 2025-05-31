import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class UserService {
  private user = new Map<number, string>();
  private i = 0;

  constructor() { }

  addUser() {
    this.user.set(this.i++, 'Son');
  }

  getUsers() {
    console.log(this.user);
    return this.user;
  }
}
