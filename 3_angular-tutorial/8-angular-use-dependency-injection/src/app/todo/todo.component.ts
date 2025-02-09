import { Component, Inject } from '@angular/core';
import { TodoDTO } from 'src/apis/TodoDTO';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  constructor(
    private _appService: AppService
    // @Inject('app-service') public _appService: AppService
  ) { }

  ngOnInit(): void {
    console.log(this._appService);

    // this._appService[0].getAllTodo().subscribe(
    //   (todos: TodoDTO[]) => {
    //     console['log'](todos);
    //     console['log'](this._appService[0].todos);
    //     console['log'](this._appService[0].users);
    //   },
    //   (error) => {
    //     console['error'](error)
    //   })

    this._appService.getAllTodo().subscribe(
      (todos: TodoDTO[]) => {
        console['log'](todos);
        console['log'](this._appService.todos);
        console['log'](this._appService.users);
      },
      (error) => {
        console['error'](error)
      })
  }
}
