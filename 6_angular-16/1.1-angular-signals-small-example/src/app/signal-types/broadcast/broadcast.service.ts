import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  private broadcastSubject = new Subject<string>();
  public broadcastSubject$ = this.broadcastSubject.asObservable();

  sendMessage(message: string) {
    this.broadcastSubject.next(message);
  }
}
