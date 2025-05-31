import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() vm!: User;
  @Output() save = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
  }

  onSave() {
    this.save.emit(this.vm);
  }

}
