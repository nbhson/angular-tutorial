import { Component, inject, ChangeDetectorRef, OnDestroy, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo, TodoService } from './services/todo.service';
import { ClickEventComponent } from './components/click-event/click-event.component';
import { HttpRequestComponent } from './components/http-request/http-request.component';
import { IntervalComponent } from './components/set-interval/set-interval.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Without Zone.js</h1>
    
    <app-click-event />
    <app-interval [tick]="tick"/>
    <app-http-request (getTodoEvent)="getTodo()" [todos]="todos" />
    <button (click)="manualTriggerChangeDetection()">Manual Trigger</button>
    `,
  styles: [`
    button {
      margin-top: 8px;
    }   
  `],
  imports: [ClickEventComponent, HttpRequestComponent, IntervalComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})

export class AppComponent implements OnInit, OnDestroy {

  todos: Array<Todo> = [];
  tick = 0;

  private _todoService = inject(TodoService);
  private _subscription = new Subscription();
  private _cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    setInterval(() => {
      this.tick += 1;
      // this._cdr.detectChanges();
    }, 1000);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  getTodo() {
    const getTodos$ = this._todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
      // this._cdr.detectChanges();
    });

    this._subscription.add(getTodos$);
  }

  manualTriggerChangeDetection() { }
}