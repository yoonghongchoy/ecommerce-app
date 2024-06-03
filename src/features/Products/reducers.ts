import {combineReducers, createReducer, isAnyOf} from '@reduxjs/toolkit';

import {Product} from '../../api/products/types';
import {ProductActions} from './actions';

interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  cachedQuery: Record<string, Product[]>;
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  cachedQuery: {},
};

const _products = createReducer(initialState.products, builder => {
  builder.addCase(
    ProductActions.fetchProductsSuccess,
    (_, action) => action.payload,
  );
});

const filteredProducts = createReducer(
  initialState.filteredProducts,
  builder => {
    builder
      .addCase(
        ProductActions.fetchProductsSuccess,
        (_, action) => action.payload,
      )
      .addCase(
        ProductActions.searchProductsSuccess,
        (_, action) => action.payload.results,
      );
  },
);

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

const cachedQuery = createReducer(initialState.cachedQuery, builder => {
  builder.addCase(ProductActions.searchProductsSuccess, (state, action) => {
    const {query, results} = action.payload;
    state[query] = results;
  });
});

/**
 * Use combineReducers to combine reducers for the products feature
 * Reason: Can easily add more reducers for different parts of the
 * product state in the future without modifying the existing structure too much
 */
export const products = combineReducers({
  products: _products,
  filteredProducts,
  loading,
  error,
  cachedQuery,
});
