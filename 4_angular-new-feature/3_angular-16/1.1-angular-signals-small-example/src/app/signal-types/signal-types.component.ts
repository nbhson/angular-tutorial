import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-signal-types',
    templateUrl: './signal-types.component.html',
    styleUrls: ['./signal-types.component.css'],
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class SignalTypesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
