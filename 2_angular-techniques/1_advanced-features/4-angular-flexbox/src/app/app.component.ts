import { Component, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private mediaSub: Subscription

  constructor(private cdRef: ChangeDetectorRef, private mediaObserver: MediaObserver){}

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((change: MediaChange) => {
      console.log(change.mqAlias);
    });
  }
}
