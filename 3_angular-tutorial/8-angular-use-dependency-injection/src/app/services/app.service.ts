import { Injectable } from '@angular/core';
import { TodoDTO } from 'src/apis/TodoDTO';
import { UserService } from 'src/apis/user.service';
import { UserDTO } from 'src/apis/UserDTO';
import { map } from 'rxjs/operators'

@Injectable()
export class AppService {

  users: Map<number, UserDTO> = new Map<number, UserDTO>();
  todos: Map<number, TodoDTO> = new Map<number, TodoDTO>();

  constructor(
    private _userService: UserService,
  ) { }

  getAllUser() {
    return this._userService.getAllUser().pipe(
      map((users) => {
        users.forEach(user => {
          this.users.set(user.id, user)
        })

        return users
      })
    )
  }

  getAllTodo() {
    return this._userService.getAllTodo().pipe(
      map((todos) => {
        todos.forEach(todo => {
          this.todos.set(todo.id, todo)
        })

        return todos
      })
    )
  }
}
