import {call, put, takeLeading} from 'redux-saga/effects';

import {fetchAllProducts} from '../../api/products/apiClient';
import {ProductActions} from './actions';

export function* productsRuntime() {
  yield takeLeading(ProductActions.fetchProductsRequest, fetchProductsSaga);
}

function* fetchProductsSaga() {
  try {
    const products: AwaitedReturnType<typeof fetchAllProducts> = yield call(
      fetchAllProducts,
    );
    yield put(ProductActions.fetchProductsSuccess(products));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    yield put(ProductActions.fetchProductsFailure(errorMessage));
  }
}
