import {all, fork} from 'redux-saga/effects';

import {productsRuntime} from '../features/Products';

export default function* rootSaga() {
  yield all([fork(productsRuntime)]);
}
