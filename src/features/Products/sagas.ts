import {call, put, select, takeLeading} from 'redux-saga/effects';

import {fetchAllProducts} from '../../api/products/apiClient';
import {ProductActions} from './actions';
import {ProductSelectors} from './selectors';

export function* productsRuntime() {
  yield takeLeading(ProductActions.fetchProductsRequest, fetchProductsSaga);
  yield takeLeading(ProductActions.searchProductsRequest, searchProductsSaga);
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

function* searchProductsSaga(
  action: ReturnType<typeof ProductActions.searchProductsRequest>,
) {
  try {
    const {payload: query} = action;
    const cache: ReturnType<typeof ProductSelectors.cachedQuery> = yield select(
      ProductSelectors.cachedQuery,
    );

    if (cache[query]) {
      yield put(
        ProductActions.searchProductsSuccess({query, results: cache[query]}),
      );
    } else {
      const allProducts: ReturnType<typeof ProductSelectors.products> =
        yield select(ProductSelectors.products);
      const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()),
      );
      yield put(
        ProductActions.searchProductsSuccess({query, results: filtered}),
      );
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    yield put(ProductActions.searchProductsFailure(errorMessage));
  }
}
