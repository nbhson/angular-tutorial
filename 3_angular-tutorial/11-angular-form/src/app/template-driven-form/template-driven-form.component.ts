import { User } from './../models/user';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  // form => #form="ngForm"
  @ViewChild('form') addUser: NgForm;
  user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.addUser);
  }

}
