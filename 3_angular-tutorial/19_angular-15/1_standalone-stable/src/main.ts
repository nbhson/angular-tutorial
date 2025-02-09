import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter, withDebugTracing, withRouterConfig } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from './app/lazy.routes';


// LAZY CACH 1
// export const appRoutes: Routes = [{
//   path: '',
//   loadChildren: () => import('./app/lazy.routes')
//     .then(routes => routes.lazyRoutes),
// }];

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), // for animation as material
    provideHttpClient(),
    provideRouter(appRoutes, 
      // withRouterConfig({
      //   onSameUrlNavigation: 'reload'
      // }), 
      // withDebugTracing()
    ),
  ]
});