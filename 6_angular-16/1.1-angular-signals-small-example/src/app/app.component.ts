import { Component } from '@angular/core';
import { BroadcastService } from './signal-types/broadcast/broadcast.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class AppComponent {
  message: string = '';

  constructor(private broadcastService: BroadcastService) {
    this.broadcastService.broadcastSubject$.subscribe(message => {
      this.message = message;
    });
  }
}
