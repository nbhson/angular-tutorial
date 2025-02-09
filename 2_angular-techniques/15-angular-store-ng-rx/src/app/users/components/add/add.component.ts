import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Appstate } from 'src/app/shared/store/appstate';
import { invokeSaveNewUserAPI } from '../../store/user.action';
import { User } from '../../store/user';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public userForm!: User;

  public form!: FormGroup;

  constructor(
    private store: Store,
    private appStore: Store<Appstate>,
    private router: Router,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initUser();
    this.initForm();
  }

  save() {
    this.store.dispatch(invokeSaveNewUserAPI({ newUser: this.userForm }));
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
    console.log('Add Destroy');
  }

  private initUser() {
    this.userForm = {
      id: 0,
      name: '',
      phone: '',
      email: ''
    };
  }

  private initForm() {
    this.form = this._formBuilder.group(
      {
        name: [this.userForm.name, Validators.compose([Validators.required])],
        phone: [this.userForm.phone, Validators.compose([Validators.required])],
        email: [this.userForm.email, Validators.compose([Validators.required])],
      },
    );
  }

}
