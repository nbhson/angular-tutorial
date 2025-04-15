import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.routeConfig?.title);
    console.log(this.route.snapshot.routeConfig?.data);
  }

}
