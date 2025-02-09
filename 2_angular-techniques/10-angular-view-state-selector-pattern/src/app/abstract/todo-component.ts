import { Injectable, OnInit } from '@angular/core';
import { TodoAbstractService } from './todo-service';

@Injectable({
  providedIn: 'root',
})
export abstract class TodoAbstractComponent<VIEW_MODEL> implements OnInit {
  constructor(protected appAbstractService: TodoAbstractService<VIEW_MODEL>) {}

  ngOnInit(): void {
    this.appAbstractService.ngOnInit();
  }

  get todoModel(): VIEW_MODEL {
    return this.appAbstractService.todoModel;
  }

  get view$() {
    return this.appAbstractService._view$;
  }
}
