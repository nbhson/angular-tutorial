import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class PostAPI {
  constructor(private _http: HttpClient) {}

  getAllPost(): Observable<PostDTO[]> {
    return this._http.get<PostDTO[]>('https://jsonplaceholder.typicode.com/posts');
  }
}

export interface PostDTO {
  userId: number,
  id: number,
  title: string,
  body: string,
}