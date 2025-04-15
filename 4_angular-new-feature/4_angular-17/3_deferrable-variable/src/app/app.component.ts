import { Component } from '@angular/core';
import { LargeComponent } from './components/large/large.component';
import { Large2Component } from "./components/large-2/large-2.component";

@Component({
  selector: 'app-root',
  imports: [LargeComponent, Large2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  load: boolean = false;
  show: boolean = false;

  onLoad() {
    this.load = true;
  }

  onDisplay() {
    this.show = true;
  }
}
