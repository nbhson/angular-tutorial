import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataApi } from 'src/api/data.api';
import { UserDto } from 'src/api/interface/user.dto';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private _dataApi: DataApi) { }

  getUsers(): Observable<User[]> {
    return this._dataApi.getUsers().pipe(
      map((usersDto) => {
        let users: User[] = []
        usersDto.forEach(dto => {
          let user = this.convertUserDtoToUser(dto)
          users.push(user)
        })
        return users
      })
    )
  }

  convertUserDtoToUser(userDto: UserDto): User {
    return new User(
      userDto.name.firstname,
      userDto.name.lastname,
      userDto.phone,
      userDto.username,
      userDto.id,
    )
  }

}

