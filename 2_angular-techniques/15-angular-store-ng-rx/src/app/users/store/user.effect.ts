import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { deleteUserAPISuccess, invokeDeleteUserAPI, invokeSaveNewUserAPI, invokeUpdateUserAPI, invokeUsersAPI, saveNewUserAPISucess, updateUserAPISucess, userFetchAPISuccess } from './user.action';
import { selectAllUsers } from './user.selector';
import { UserService } from '../service/user.service';
import { Appstate } from 'src/app/shared/store/appstate';
import { setAPIStatus } from 'src/app/shared/store/app.action';

@Injectable()
export class UserEffect {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store,
    private appStore: Store<Appstate>
  ) { }

  loadAllUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeUsersAPI),
      withLatestFrom(this.store.pipe(select(selectAllUsers))),
      mergeMap(([, usersformStore]) => {
        if (usersformStore.length > 0) {
          return EMPTY;
        }
        return this.userService
          .get()
          .pipe(map((data) => userFetchAPISuccess({ allUsers: data })));
      })
    )
  );

  saveNewUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewUserAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.userService.create(action.newUser).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return saveNewUserAPISucess({ newUser: data });
          })
        );
      })
    );
  });

  updateUserAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeUpdateUserAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.userService.update(action.updateUser).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return updateUserAPISucess({ updateUser: data });
          })
        );
      })
    );
  });

  deleteUserAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeDeleteUserAPI),
      switchMap((actions) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.userService.delete(actions.id).pipe(
          map(() => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return deleteUserAPISuccess({ id: actions.id });
          })
        );
      })
    );
  });
}