import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SayHelloService {
  constructor() {}

  sayHello() {
    console.log('Hello');
  }
}
