import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../../store/rootReducer';

const _userSelector = (state: RootState) => state.user;

export const UserSelector = {
  currentUser: createSelector(_userSelector, state => state.currentUser),
  loading: createSelector(_userSelector, state => state.loading),
  error: createSelector(_userSelector, state => state.error),
} as const;
