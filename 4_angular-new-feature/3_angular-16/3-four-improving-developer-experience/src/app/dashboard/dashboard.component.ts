import { Component, DestroyRef, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private destroyRef: DestroyRef) { }

  ngOnInit() {
    this.destroy();
  }

  destroy() {
    this.destroyRef.onDestroy(() => {
      // clean up
      console.log('destroyRef');
    });
  }

}
