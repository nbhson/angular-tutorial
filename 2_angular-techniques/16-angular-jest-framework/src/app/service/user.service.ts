import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IUser } from '../model/user.interface';
import { ServerHelper } from '../helper/server.helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get<IUser[]>('http://localhost:3000/users');
  }

  getUsersCatchError(): Observable<any> {
    return this._http.get<IUser[]>('http://localhost:3000/users').pipe(
      tap((users: any) => {
        // console.log('Data fetched:', users);
      }),
      catchError(ServerHelper.handleError('Failed to fetch data'))
    )
  }

  createUser(user: IUser): Observable<any> {
    return this._http.post<IUser>('http://localhost:3000/users', user, this.httpOptions);
  }

  updateUser(user: IUser): Observable<any> {
    return this._http.put<IUser>(`http://localhost:3000/users/${user.id}`, user, this.httpOptions);
  }

  deleteUser(id: number) {
    return this._http.delete(`http://localhost:3000/users/${id}`);
  }
}
