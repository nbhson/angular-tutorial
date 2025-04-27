import { Injectable, resource, signal } from '@angular/core';

interface Todo {
  "userId": number
  "id": number
  "title": string
  "completed": boolean
}

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  todoId = signal<string>('1');

  todoDetails = resource({
    request: this.todoId,
    loader: async (params) => {
      const todoId = params.request;
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {signal: params.abortSignal});
      return await response.json() as Todo;
    }
  });

  isTodoLoading = this.todoDetails.isLoading;
  todo = this.todoDetails.value;
  error = this.todoDetails.error;


  updateTodo(name: string): void {
    this.todoDetails.update((fruit) => (fruit ? {
      ...fruit,
      name,
    } : undefined))
  }

  reloadTodo(): void {
    this.todoDetails.reload();
  }

  onTodoChange(fruitId: string): void {
    this.todoId.set(fruitId);
  }

}
