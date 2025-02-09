import { Component } from '@angular/core';
import { TodoDto } from 'src/api/todo.dto';
import { TodoService } from 'src/app/service/todo.service';
import { TodoAbstractComponent } from '../abstract/todo-component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent extends TodoAbstractComponent<TodoDto[]> {
  constructor(private _todoService: TodoService) {
    super(_todoService);
  }
}
