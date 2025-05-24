import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TODO_REPOSITORY } from './core/ports/todo.repository';
import { Todo } from './core/domain/todo.model';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Todo App</span>
    </mat-toolbar>

    <div class="container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>My Tasks</mat-card-title>
        </mat-card-header>

        <mat-card-content>
          <!-- Add Todo Form -->
          <div class="add-todo">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Add new task</mat-label>
              <input 
                matInput 
                #todoInput 
                placeholder="What needs to be done?"
                (keyup.enter)="addTodo(todoInput.value); todoInput.value = ''">
              <button 
                matSuffix 
                mat-icon-button 
                (click)="addTodo(todoInput.value); todoInput.value = ''"
                [disabled]="!todoInput.value.trim()">
                <mat-icon>add</mat-icon>
              </button>
            </mat-form-field>
          </div>

          <!-- Todo List -->
          <mat-list>
            @for (todo of todos$ | async; track todo.id) {
              <mat-list-item class="todo-item">
                <div class="todo-content">
                  <mat-checkbox
                    [checked]="todo.completed"
                    (change)="toggleTodo(todo)"
                    color="primary">
                    <span [class.completed]="todo.completed">{{ todo.title }}</span>
                  </mat-checkbox>
                  <button 
                    mat-icon-button 
                    color="warn"
                    (click)="deleteTodo(todo.id)">
                    <mat-icon>delete</mat-icon>
                  </button>
                </div>
              </mat-list-item>
              <mat-divider></mat-divider>
            }
          </mat-list>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 20px auto;
      padding: 0 20px;
    }

    .full-width {
      width: 100%;
    }

    .add-todo {
      margin-bottom: 20px;
      padding: 0 16px;
    }

    mat-form-field {
      ::ng-deep {
        .mat-mdc-form-field-subscript-wrapper {
          display: none;
        }
        .mat-mdc-text-field-wrapper {
          padding: 0 16px;
        }
        .mat-mdc-form-field-flex {
          padding: 0;
        }
        .mat-mdc-form-field-infix {
          padding: 16px 0;
        }
      }
    }

    .todo-item {
      height: 64px !important;
      padding: 0 16px !important;
    }

    .todo-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 8px;
    }

    mat-checkbox {
      flex: 1;
      margin-right: 16px;
    }

    .completed {
      text-decoration: line-through;
      color: rgba(0, 0, 0, 0.38);
    }

    mat-card {
      margin-bottom: 20px;
    }

    mat-card-header {
      margin-bottom: 20px;
      padding: 16px;
    }

    mat-card-title {
      font-size: 24px;
      font-weight: 500;
    }

    mat-card-content {
      padding: 0 16px 16px;
    }
  `]
})
export class AppComponent {
  private todoRepository = inject(TODO_REPOSITORY);
  todos$: Observable<Todo[]>;

  constructor() {
    this.todos$ = this.todoRepository.getAll();
  }

  addTodo(title: string) {
    if (!title.trim()) return;
    
    this.todoRepository.create({ title, completed: false })
      .subscribe(() => {
        this.todos$ = this.todoRepository.getAll();
      });
  }

  toggleTodo(todo: Todo) {
    this.todoRepository.update(todo.id, { completed: !todo.completed })
      .subscribe(() => {
        this.todos$ = this.todoRepository.getAll();
      });
  }

  deleteTodo(id: string) {
    this.todoRepository.delete(id)
      .subscribe(() => {
        this.todos$ = this.todoRepository.getAll();
      });
  }
}
