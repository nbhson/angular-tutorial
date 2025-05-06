import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    @let userName = 'Jane Doe';
    <h1>Welcome, {{ userName }}</h1>


    @let user = user$ | async;
    @if (user) {
      <h1>Hello, {{user.name}}</h1>
      <ul>
        @for (snack of user.favoriteSnacks; track snack.id) {
          <li>{{snack.name}}</li>
        }
      </ul>
    }
  `,
  styles: [],
  imports: [AsyncPipe],
  standalone: true,
})
export class AppComponent {
  user$ = of({
    name: 'John Doe',
    photo: 'https://example.com/photo.jpg',
    favoriteSnacks: [
      { id: 1, name: 'Chips' },
      { id: 2, name: 'Chocolate' },
      { id: 3, name: 'Cookies' },
    ],    
  });
}
