import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Appstate } from 'src/app/shared/store/appstate';
import { User } from '../../store/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import { selectUserById } from '../../store/user.selector';
import { invokeUpdateUserAPI } from '../../store/user.action';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/app.selector';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public userForm!: User;
  public form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private appStore: Store<Appstate>,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initUser();
    this.initFrom();
    this.fetchDataById();
  }

  udapte() {
    this.store.dispatch(
      invokeUpdateUserAPI({ updateUser: this.userForm })
    );
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
    console.log('Edit Destroy');
  }

  private initUser() {
    this.userForm = {
      id: 0,
      name: '',
      phone: '',
      email: ''
    };
  }
  private initFrom() {
    this.form = this._formBuilder.group(
      {
        name: [this.userForm.name, Validators.compose([Validators.required])],
        phone: [this.userForm.phone, Validators.compose([Validators.required])],
        email: [this.userForm.email, Validators.compose([Validators.required])],
      },
    );
  }
  private fetchDataById() {
    let fetchData$ = this.route.paramMap.pipe(
      switchMap((params) => {
        var id = Number(params.get('id'));
        return this.store.pipe(select(selectUserById(id)));
      })
    );
    fetchData$.subscribe((data) => {
      if (data) {
        this.userForm = { ...data };
      }
      else {
        this.router.navigate(['/']);
      }
    });
  }

}
