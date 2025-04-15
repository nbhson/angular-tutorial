import { AsyncPipe, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    BlogDetailComponent
  ],
})
export class BlogComponent implements OnInit {

  todos$ = this._http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos');

  constructor(private _http: HttpClient) {}

  ngOnInit() {
  }

}

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}