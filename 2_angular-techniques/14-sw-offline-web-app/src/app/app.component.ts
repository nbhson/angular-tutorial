import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { Observable, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'offline-app';
  users$!: Observable<any>;

  constructor(private swUpdate: SwUpdate, private swPush: SwPush, private http: HttpClient) {
    if (this.swUpdate.isEnabled) {
      interval(6 * 60 * 60).pipe(
        takeWhile(() => true)
      ).subscribe(() => {
        this.swUpdate.checkForUpdate();
      });
    }
  }

  ngOnInit() {
    this.users$ = this.http.get('https://jsonplaceholder.typicode.com/users');
    if (!navigator.onLine) {
      alert('You are offline');
    }
    window.addEventListener('offline', () => {
      alert('You are offline');
    });
    window.addEventListener('online', () => {
      alert('You are back online');
    });

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available. Load New Version?")) {
          window.location.reload();
        }
      });
    }
  }
}
