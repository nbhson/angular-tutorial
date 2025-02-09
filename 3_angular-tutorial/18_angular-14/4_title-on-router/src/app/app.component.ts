import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    HomeComponent,
    NavbarComponent,
  ],
})
export class AppComponent {
  title = 'ng14';

  constructor() {}

}
