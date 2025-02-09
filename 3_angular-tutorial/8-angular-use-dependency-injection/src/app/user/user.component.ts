import { Component, Inject } from '@angular/core';
import { UserDTO } from 'src/apis/UserDTO';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  constructor(
    private _appService: AppService
    // @Inject('app-service') public _appService: AppService
  ) { }

  ngOnInit(): void {
    console.log(this._appService);

    // this._appService[0].getAllUser().subscribe(
    //   (users: UserDTO[]) => {
    //     console['log'](users);
    //     console['log'](this._appService[0].todos);
    //     console['log'](this._appService[0].users);
    //   },
    //   (error) => {
    //     console['error'](error)
    //   })

    this._appService.getAllUser().subscribe(
      (users: UserDTO[]) => {
        console['log'](users);
        console['log'](this._appService.todos);
        console['log'](this._appService.users);
      },
      (error) => {
        console['error'](error)
      })
  }
}
