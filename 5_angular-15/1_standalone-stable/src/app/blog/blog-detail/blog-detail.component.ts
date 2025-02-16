import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  standalone: true
})
export class BlogDetailComponent implements OnInit {

  @Input() title = '';
  @Input() completed = false;

  constructor() { }

  ngOnInit() {
  }

}
