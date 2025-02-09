import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  login: boolean = true;

  constructor(
    private _routerService: Router,
  ) {}

  ngOnInit() {

  }

  navigate(url) {
    // this._routerService.navigate([url])
    // or
    this._routerService.navigateByUrl(url);
  }

  logout() {
    localStorage.removeItem('user');
    this._routerService.navigate(['/']);
  }

  changeStatus() {
    this.login = !this.login
  }
}
