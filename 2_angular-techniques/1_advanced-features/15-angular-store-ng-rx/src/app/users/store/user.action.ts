import { createAction, props } from '@ngrx/store';
import { User } from './user';

// GET ALL
export const invokeUsersAPI = createAction(
  '[User API] Invoke Users Fetch API'
);

export const userFetchAPISuccess = createAction(
  '[User API] Fetch API Success',
  props<{ allUsers: User[] }>()
);

// ADD
export const invokeSaveNewUserAPI = createAction(
  '[User API] Inovke save new user api',
  props<{ newUser: User }>()
);

export const saveNewUserAPISucess = createAction(
  '[User API] save new user api success',
  props<{ newUser: User }>()
);

// UPDATE
export const invokeUpdateUserAPI = createAction(
  '[User API] Inovke update user api',
  props<{ updateUser: User }>()
);

export const updateUserAPISucess = createAction(
  '[User API] update user api success',
  props<{ updateUser: User }>()
);

// DELETE
export const invokeDeleteUserAPI = createAction(
  '[User API] Inovke delete User api',
  props<{ id: number }>()
);

export const deleteUserAPISuccess = createAction(
  '[User API] deleted User api success',
  props<{ id: number }>()
);