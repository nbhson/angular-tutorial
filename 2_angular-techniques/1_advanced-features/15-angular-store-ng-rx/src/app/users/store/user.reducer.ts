import { createReducer, on } from "@ngrx/store";
import { User } from "./user"
import { deleteUserAPISuccess, saveNewUserAPISucess, updateUserAPISucess, userFetchAPISuccess } from "./user.action";

//  Empty array assigned as initial data of our store.
export const initialState: ReadonlyArray<User> = [];

// Using 'createReducer' that loads from '@ngrx/store' 
// We created our 'userReducers' by 'initialState' as an input parameter.
export const userReducer = createReducer(
  initialState,
  on(userFetchAPISuccess, (state, { allUsers }) => {
    return allUsers;
  }),
  on(saveNewUserAPISucess, (state, { newUser }) => {
    let newState = [...state, newUser];
    return newState
  }),
  on(updateUserAPISucess, (state, { updateUser }) => {
    let newState = state.map((_) => {
      let user = { ..._ };
      if (_.id === updateUser.id) {
        user.name = updateUser.name;
        user.email = updateUser.email;
        user.phone = updateUser.phone;
      }

      return user;
    });

    return newState
  }),
  on(deleteUserAPISuccess, (state, { id }) => {
    let newState = state.filter((_) => _.id != id);
    return newState;
  })
);