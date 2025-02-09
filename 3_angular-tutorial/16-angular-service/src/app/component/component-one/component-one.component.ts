import { SayHelloService } from './../../services/say-hello.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

  private _service: SayHelloService

  constructor(service: SayHelloService) {
    this._service = service
  }

  ngOnInit(): void {
  }


  sayHello() {
    this._service.sayHello()
  }
}
