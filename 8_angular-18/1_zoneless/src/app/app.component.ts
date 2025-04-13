import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, NgZone, signal } from '@angular/core';
import { ChildOneComponent } from "./components/child-one/child-one.component";
import { PlaceholderService } from './services/placeholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ChildOneComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private placeholderService = inject(PlaceholderService);

  constructor(
    private cd: ChangeDetectorRef,
    private ngZone: NgZone
  ) {
    // Kiểm tra xem Zone.js có thực sự bị disable
    console.log('Is NgZone enabled:', NgZone.isInAngularZone());
  }

  counter = signal(0);

  user = {
    name: 'test',
    age: 0
  };

  todos = []

  ngOnInit(): void {
    this.getTodo();
  }

  // expected: UI ko thay đổi vì đã remove zone.js
  incrementCounter() {
    // this.counter.set(this.counter() + 1);
    // this.user.age = this.counter();
  }

  // expected: UI ko thay đổi vì đã remove zone.js
  getTodo() {
    this.placeholderService.getData().subscribe((todos) => {
      this.todos = todos
      console.log(this.todos);
    });
  }
}
