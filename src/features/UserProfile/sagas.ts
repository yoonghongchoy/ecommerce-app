import {call, put, takeLeading} from 'redux-saga/effects';

import {fetchUser} from '../../api/user/apiClient';
import {UserActions} from './actions';

export function* userRuntimes() {
  yield takeLeading(UserActions.fetchUserRequest, fetchUserSaga);
}

function* fetchUserSaga() {
  try {
    const user: AwaitedReturnType<typeof fetchUser> = yield call(fetchUser);
    yield put(UserActions.fetchUserSuccess(user));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    yield put(UserActions.fetchUserFailure(errorMessage));
  }
}
