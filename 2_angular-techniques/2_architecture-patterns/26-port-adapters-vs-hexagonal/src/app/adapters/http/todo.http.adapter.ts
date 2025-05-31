import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Todo } from '../../core/domain/todo.model';
import { TodoRepository } from '../../core/ports/todo.repository';

@Injectable()
export class TodoHttpAdapter implements TodoRepository {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/api/todos';

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  getById(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseUrl}/${id}`);
  }

  create(todo: Omit<Todo, 'id' | 'createdAt'>): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, {
      ...todo,
      createdAt: new Date()
    });
  }

  update(id: string, todo: Partial<Todo>): Observable<Todo> {
    return this.http.patch<Todo>(`${this.baseUrl}/${id}`, todo);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
} 