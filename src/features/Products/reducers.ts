import {combineReducers, createReducer, isAnyOf} from '@reduxjs/toolkit';

import {Product} from '../../api/products/types';
import {ProductActions} from './actions';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const _products = createReducer(initialState.products, builder => {
  builder.addCase(
    ProductActions.fetchProductsSuccess,
    (_, action) => action.payload,
  );
});

const loading = createReducer(initialState.loading, builder => {
  builder
    .addCase(ProductActions.fetchProductsRequest, () => true)
    .addMatcher(
      isAnyOf(
        ProductActions.fetchProductsSuccess,
        ProductActions.fetchProductsFailure,
      ),
      () => initialState.loading,
    );
});

const error = createReducer(initialState.error, builder => {
  builder
    .addCase(ProductActions.fetchProductsRequest, () => initialState.error)
    .addCase(
      ProductActions.fetchProductsFailure,
      (_, action) => action.payload,
    );
});

/**
 * Use combineReducers to combine reducers for the products feature
 * Reason: Can easily add more reducers for different parts of the
 * product state in the future without modifying the existing structure too much
 */
const products = combineReducers({
  products: _products,
  loading,
  error,
});

export default products;
