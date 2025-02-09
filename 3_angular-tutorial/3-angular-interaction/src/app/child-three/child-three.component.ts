import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.scss']
})
export class ChildThreeComponent implements OnInit {

  private _movieName: string
  private _movieTime: string

  @Input()
  set movieName(movieName: string){
    this._movieName = movieName
  }
  get movieName() : string {
    return this._movieName
  }

  @Input()
  set movieTime(movieTime: string){
    this._movieTime = movieTime
  }
  get movieTime() : string {
    return this._movieTime
  }


  constructor() { }

  ngOnInit(): void {
  }

}
