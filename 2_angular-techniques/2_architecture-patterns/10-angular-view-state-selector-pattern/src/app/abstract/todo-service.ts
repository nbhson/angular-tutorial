import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { View, ViewData, ViewError } from '../interface/view.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class TodoAbstractService<VIEW_MODEL> {
  public todoModel!: VIEW_MODEL;

  public _view$ = new BehaviorSubject<View<VIEW_MODEL>>({});

  constructor(@Inject(String) private _model?: VIEW_MODEL) {
    this.todoModel = _model ? _model : <VIEW_MODEL>{};
  }

  protected generateData(todos: VIEW_MODEL): void {
    const data: ViewData<VIEW_MODEL> = {
      data: todos,
    };

    this._view$.next(data);
  }

  protected generateError(error: Error): void {
    const err: ViewError = {
      error: {
        message: error.message,
        name: error.name,
      },
    };

    this._view$.next(err);
  }

  protected generateLoading(): void {
    const viewLoader: View<VIEW_MODEL> = {
      loader: true,
    };

    this._view$.next(viewLoader);
  }

  abstract ngOnInit(): void;
}
