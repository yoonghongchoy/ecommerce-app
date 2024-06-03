import {combineReducers, createReducer, isAnyOf} from '@reduxjs/toolkit';
import {UserActions} from './actions';

import {User} from '../../api/user/types';

interface UserState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

const currentUser = createReducer(initialState.currentUser, builder => {
  builder
    .addCase(UserActions.fetchUserSuccess, (_, action) => action.payload)
    .addCase(UserActions.updateEmail, (state, action) => {
      if (state) {
        return {...state, email: action.payload};
      }
      return state;
    });
});

const loading = createReducer(initialState.loading, builder => {
  builder
    .addCase(UserActions.fetchUserRequest, () => true)
    .addMatcher(
      isAnyOf(UserActions.fetchUserSuccess, UserActions.fetchUserFailure),
      () => initialState.loading,
    );
});

const error = createReducer(initialState.error, builder => {
  builder
    .addCase(UserActions.fetchUserRequest, () => initialState.error)
    .addCase(UserActions.fetchUserFailure, (_, action) => action.payload);
});

/**
 * Use combineReducers to combine reducers for the user feature
 * Reason: Can easily add more reducers for different parts of the
 * user state in the future without modifying the existing structure too much
 */
export const user = combineReducers({
  currentUser,
  loading,
  error,
});
