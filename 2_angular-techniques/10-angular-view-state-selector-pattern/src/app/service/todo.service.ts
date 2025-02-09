import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { TodoDto } from '../../api/todo.dto';
import { TodoAbstractService } from 'src/app/abstract/todo-service';
import { TodoApiService } from 'src/api/todo.api';

@Injectable({
  providedIn: 'root',
})
export class TodoService extends TodoAbstractService<TodoDto[]> {
  constructor(private _todoApi: TodoApiService) {
    super();
  }

  override ngOnInit(): void {
    this._view$.asObservable();
    this.getTodo();
  }

  private getTodo() {
    this.generateLoading();
    this._todoApi
      .getTodo()
      .pipe(delay(3000))
      .subscribe(
        (todos) => {
          this.todoModel = todos;
          this.generateData(todos);
        },
        (error) => {
          this.generateError(error);
        },
      );
  }
}
