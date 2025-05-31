import { Component } from '@angular/core';
import { SLIDE_TO_LEFT } from './animation/route.animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SLIDE_TO_LEFT],
})
export class AppComponent {
  title = '22-angular-routing-animation';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
