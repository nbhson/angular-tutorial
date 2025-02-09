import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from './interface/user.dto';

@Injectable({
  providedIn: 'root',
})
export class DataApi {
  private readonly USERS_PATH = 'https://fakestoreapi.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(this.USERS_PATH)
  }
}