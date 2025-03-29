import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '3-four-improving-developer-experience';
  count = 0;

  increaseCount() {
    this.count += 1;
  }
}
