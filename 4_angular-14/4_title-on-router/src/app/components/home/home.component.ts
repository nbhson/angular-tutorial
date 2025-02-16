import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HightlightDirective } from 'src/app/directives/highlight.directive';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,  HightlightDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _postService: PostService) { }

  ngOnInit(): void {}

  decreaseLength() {
    this._postService.length += 1
  }
}
