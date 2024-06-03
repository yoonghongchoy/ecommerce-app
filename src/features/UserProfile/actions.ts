import {createAction} from '@reduxjs/toolkit';

import {User} from '../../api/user/types';

export const UserActions = {
  fetchUserRequest: createAction('user/fetchUserRequest'),
  fetchUserSuccess: createAction<User>('user/fetchUserSuccess'),
  fetchUserFailure: createAction<string>('user/fetchUserFailure'),

  updateEmail: createAction<string>('user/updateEmail'),
} as const;
