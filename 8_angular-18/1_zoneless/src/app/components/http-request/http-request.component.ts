import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Todo } from '../../services/todo.service';

@Component({
  selector: 'app-http-request',
  template: `
  <div class="todos">
    @for (todo of todos; track todo.id) {
      <div>
        <p>ID: {{ todo.id }}</p>
        <p>User ID: {{ todo.userId }}</p>
        <p>Title: {{ todo.title }}</p>
        <p>Completed: {{ todo.completed }}</p>
      </div>
    } @empty {
      <div>There are no todos.</div>
    }
    <button (click)="getTodos()">Get Todo</button>
  </div>
  `,
  styles: [`
    .todos {
      border: 1px dashed rgb(142, 142, 142);
      padding: 16px;
      margin-top: 16px;
    } 
    button {
      margin-top: 8px;
    }   
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class HttpRequestComponent implements OnChanges {
  @Input({ required: true }) todos: Array<Todo> = [];
  @Output() getTodoEvent = new EventEmitter<null>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  getTodos() {
    this.getTodoEvent.emit();
  }
}
