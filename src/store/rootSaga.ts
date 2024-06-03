import {all, fork} from 'redux-saga/effects';

import {productsRuntime} from '../features/Products';
import {userRuntimes} from '../features/UserProfile';

export default function* rootSaga() {
  yield all([fork(productsRuntime)]);
  yield all([fork(userRuntimes)]);
}
