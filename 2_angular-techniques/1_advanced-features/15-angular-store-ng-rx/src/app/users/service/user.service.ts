import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "../store/user";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  create(payload: User) {
    return this.http.post<User>('http://localhost:3000/users', payload);
  }

  update(payload: User) {
    return this.http.put<User>(`http://localhost:3000/users/${payload.id}`, payload);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
}
