import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public api: string = 'http://jsonplaceholder.typicode.com/todos/';

  constructor(
    private http: HttpClient
  ) { }

  getAllTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.api);
  }

  addTodo(todo): Observable<Todo> {
    return this.http.post<Todo>(this.api, todo);
  }
  updateTodo(todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.api}/${todo.id}`, todo);
  }
  deleteTodo(id): Observable<Todo> {
    return this.http.delete<Todo>(`${this.api}/${id}`);
  }

  handleError(err): void {
    if (err.error instanceof Error) {
      console.log(`Client-side error: ${err.error.message}`);
    } else {
      console.log(`Server-side error: ${err.status} - ${err.error}`);
    }
  }
}
