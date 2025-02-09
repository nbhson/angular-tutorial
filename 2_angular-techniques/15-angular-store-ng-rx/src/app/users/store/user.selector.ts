import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from './user';

// 'createFeatureSelector' is used to fetch all the data from our feature module(eg: 'Users' module)
// Here the name of our selector 'my-users' must be used to register the 'userReducer' into the 'user.modulet.ts' to register the feature store or child store.
export const selectAllUsers = createFeatureSelector<User[]>('my-users');

export const selectUserById = (userId: number) =>
  createSelector(selectAllUsers, (users: User[]): User | any => {
    var userbyId = users.find((_) => _.id === userId);
    if (!userbyId) {
      return null;
    }
    return userbyId;
  });