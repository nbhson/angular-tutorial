import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent implements OnInit {

  // @Input() vm!: {
  //   id: string;
  //   username: string;
  //   firstname: string;
  //   lastname: string;
  //   phone: string;
  // }
  @Input() user!: User
  @Input() active!: boolean;

  @Output() selectUser = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select() {
    this.selectUser.emit(this.user);
  }

}
