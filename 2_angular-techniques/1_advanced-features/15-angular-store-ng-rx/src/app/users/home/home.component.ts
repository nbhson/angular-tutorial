import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectAllUsers } from '../store/user.selector';
import { invokeDeleteUserAPI, invokeUsersAPI } from '../store/user.action';
import { Appstate } from 'src/app/shared/store/appstate';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { setAPIStatus } from 'src/app/shared/store/app.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private store: Store, private appStore: Store<Appstate>) { }
  users$ = this.store.pipe(select(selectAllUsers));

  ngOnInit(): void {
    this.store.dispatch(invokeUsersAPI());
  }

  ngOnDestroy(): void {
    console.log('Home Destroy');
  }

  deleteUser(userId: number) {
    this.store.dispatch(
      invokeDeleteUserAPI({
        id: userId,
      })
    );
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
      }
    });
  }
}
