import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  subscriptionAllToDos: Subscription;
  subscriptionAddToDo: Subscription;
  subscriptionUpdateToDo: Subscription;
  todos: Array<Todo>;
  todo: Todo;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();

    this.todo = {
      id: 0,
      title: '',
      userId: 0,
      completed: false
    }
  }
  ngOnDestroy(): void {
    this.subscriptionAllToDos.unsubscribe();
  }

  loadTodos(): void {
    this.subscriptionAllToDos = this.todoService.getAllTodos().subscribe(
      (todos) => {
        this.todos = todos;
      },
      (err) => {
        this.todoService.handleError(err);
      }
    );
  }

  addTodo(): void {
    this.subscriptionAddToDo = this.todoService.addTodo(this.todo).subscribe((result) => {
      this.todos.push(result);
    },
    (err) => {
      this.todoService.handleError(err);
    });
  }

  updateTodo(todo): void{
    this.todo = {
      id: todo.id,
      title: todo.title,
      userId: todo.userId,
      completed: todo.completed
    };
  }

  update(): void{
    this.subscriptionUpdateToDo = this.todoService.updateTodo(this.todo).subscribe((result) => {
      console.log(result);
    },
    (err) => {
      this.todoService.handleError(err);
    });
  }

  deleteTodo(id): void{
    this.subscriptionUpdateToDo = this.todoService.deleteTodo(id).subscribe((result) => {
      console.log(result);
    },
    (err) => {
      this.todoService.handleError(err);
    });
  }

}
