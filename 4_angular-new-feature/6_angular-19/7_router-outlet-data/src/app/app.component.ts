import { Component, computed, signal } from '@angular/core';
import { FighterList } from './interfaces/fighter-list.interface';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, FormsModule]
})
export class AppComponent {
  allegiance = signal('jedi');
  fighterIds = computed<FighterList>(() => {
    if (this.allegiance() == 'jedi') {
      return { ids: [1, 10, 20, 51, 52, 53, 32], isSith: false };
    }
    return { ids: [4, 44, 21, 67], isSith: true };
  });
}
