import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogged = false;

  constructor() { }

  getLoginInfo() {
    return this.isLogged;
  }
}
