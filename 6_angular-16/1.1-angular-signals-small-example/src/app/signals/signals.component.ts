import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-signals',
    templateUrl: './signals.component.html',
    styleUrls: ['./signals.component.css'],
    standalone: true,
    imports: [RouterLink, RouterOutlet],
})
export class SignalsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
