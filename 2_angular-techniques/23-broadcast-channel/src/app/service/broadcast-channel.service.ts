import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcastChannelService {

  private channel: BroadcastChannel;

  constructor() {
    this.channel = new BroadcastChannel('channelName');
  }

  postMessage(message: any) {
    this.channel.postMessage(message);
  }

  onMessage(callback: (event: MessageEvent) => void) {
    this.channel.onmessage = callback;
  }

  close() {
    this.channel.close();
  }
}
