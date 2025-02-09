import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-child-four',
  templateUrl: './child-four.component.html',
  styleUrls: ['./child-four.component.scss']
})
export class ChildFourComponent implements OnInit {

  @Output('myUser') myEvent = new EventEmitter<User>()
  name: string
  age: number

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    let user: User =  {
      id: Math.ceil(Math.random() * (10 - 1) + 1),
      name: this.name,
      age: this.age
    }
    this.myEvent.emit(user)
  }

}

interface User {
  id: number,
  name: string,
  age: number
}
