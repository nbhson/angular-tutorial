import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-b',
  template: `
    <h1>B comp</h1>
    <button routerLink="">back to main</button>
  `,
  styles: [],
})
export class bComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("[BComponent, data]", this.route.snapshot.data);
    console.log("[BComponent, params]", this.route.snapshot.params);
  }
}
