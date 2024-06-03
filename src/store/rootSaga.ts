import {all, fork} from 'redux-saga/effects';

import {productsRuntime} from '../features/Products/sagas';

export default function* rootSaga() {
  yield all([fork(productsRuntime)]);
}
