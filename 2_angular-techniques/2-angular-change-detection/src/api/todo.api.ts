import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoApiService {
  constructor(private _http: HttpClient) {}

  getTodo(): Observable<TodoDto[]> {
    return this._http.get<TodoDto[]>('https://jsonplaceholder.typicode.com/todos/');
  }
}

export interface TodoDto {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}