import { Observable } from 'rxjs';
import { Todo } from '../domain/todo.model';
import { InjectionToken } from '@angular/core';

export interface TodoRepository {
  getAll(): Observable<Todo[]>;
  getById(id: string): Observable<Todo>;
  create(todo: Omit<Todo, 'id' | 'createdAt'>): Observable<Todo>;
  update(id: string, todo: Partial<Todo>): Observable<Todo>;
  delete(id: string): Observable<void>;
}

export const TODO_REPOSITORY = new InjectionToken<TodoRepository>('TodoRepository'); 