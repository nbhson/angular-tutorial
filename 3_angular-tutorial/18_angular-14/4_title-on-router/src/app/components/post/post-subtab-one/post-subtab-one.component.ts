import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-subtab-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-subtab-one.component.html',
  styleUrls: ['./post-subtab-one.component.scss']
})
export class PostSubtabOneComponent implements OnInit {
  @Input() title: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
