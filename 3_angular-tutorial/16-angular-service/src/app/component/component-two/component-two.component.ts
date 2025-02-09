import { SayHelloService } from './../../services/say-hello.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {

  constructor(private _service: SayHelloService) { }

  ngOnInit(): void {
  }

  sayHello() {
    this._service.sayHello()
  }

}
