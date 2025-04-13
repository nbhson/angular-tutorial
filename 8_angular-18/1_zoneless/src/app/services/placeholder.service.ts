import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
