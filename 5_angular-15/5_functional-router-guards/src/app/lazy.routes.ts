import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component')
        .then((m) => m.HomeComponent),
       
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./blog/blog.component')
        .then((m) => m.BlogComponent),
    canActivate: [
      () => inject(AuthService).getLoginInfo()
    ]
  }
]

