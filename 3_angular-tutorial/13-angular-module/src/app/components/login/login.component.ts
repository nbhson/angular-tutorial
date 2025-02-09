import { Router } from '@angular/router';
import { AlertComponent } from './../alert/alert.component';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  errMess: string = '';

  constructor(
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.userName === 'admin' && this.password === 'admin') {
      let user = {
        user: this.userName,
        password: this.password,
      };
      this._snackBar.openFromComponent(AlertComponent, {
        duration: 5000,
      });
      localStorage.setItem('user', JSON.stringify(user));
      this.errMess = ''
      this._router.navigate(['/products'])
    } else {
      this.errMess = 'User name or password incorrect !';
    }
  }
}
