import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

// LAZY CACH 1
// export const lazyRoutes: Routes = [
//     {path: 'home', component: HomeComponent},
//     {path: 'blog', component: BlogComponent},
// ];

// LAZY CACH 2
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
  }
]

