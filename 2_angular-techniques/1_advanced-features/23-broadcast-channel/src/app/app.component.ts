import { Component } from '@angular/core';
import { BroadcastChannelService } from './service/broadcast-channel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private broadcastChannelService: BroadcastChannelService;
  public receivedMessage = '';

  constructor() {
    this.broadcastChannelService = new BroadcastChannelService();
    this.broadcastChannelService.onMessage(event => {
      debugger;
      console.log(event.data);
    });
  }

  ngOnInit(): void {
    this.sendMessage();
  }

  sendMessage() {
    this.broadcastChannelService.postMessage('Hello from Angular!');
  }

  ngOnDestroy() {
    this.broadcastChannelService.close();
  }
}
