import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../../core/domain/todo.model';
import { TodoRepository } from '../../core/ports/todo.repository';

@Injectable()
export class TodoMockAdapter implements TodoRepository {
  private todos: Todo[] = [
    {
      id: '1',
      title: 'Learn Angular',
      completed: false,
      createdAt: new Date()
    },
    {
      id: '2',
      title: 'Learn Ports and Adapters',
      completed: false,
      createdAt: new Date()
    }
  ];

  getAll(): Observable<Todo[]> {
    return of(this.todos);
  }

  getById(id: string): Observable<Todo> {
    const todo = this.todos.find(t => t.id === id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    return of(todo);
  }

  create(todo: Omit<Todo, 'id' | 'createdAt'>): Observable<Todo> {
    const newTodo: Todo = {
      ...todo,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date()
    };
    this.todos.push(newTodo);
    return of(newTodo);
  }

  update(id: string, todo: Partial<Todo>): Observable<Todo> {
    const index = this.todos.findIndex(t => t.id === id);
    if (index === -1) {
      throw new Error('Todo not found');
    }
    this.todos[index] = { ...this.todos[index], ...todo };
    return of(this.todos[index]);
  }

  delete(id: string): Observable<void> {
    const index = this.todos.findIndex(t => t.id === id);
    if (index === -1) {
      throw new Error('Todo not found');
    }
    this.todos.splice(index, 1);
    return of(void 0);
  }
} 