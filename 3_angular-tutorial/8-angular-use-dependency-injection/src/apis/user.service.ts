import { Injectable } from '@angular/core';
import { UserDTO } from './UserDTO'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoDTO } from './TodoDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly users = 'https://jsonplaceholder.typicode.com/users'
  readonly todos = 'https://jsonplaceholder.typicode.com/todos'

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAllUser(): Observable<UserDTO[]> {
    return this._httpClient.get<UserDTO[]>(this.users)
  }
  getAllTodo(): Observable<TodoDTO[]> {
    return this._httpClient.get<TodoDTO[]>(this.todos)
  }
}
