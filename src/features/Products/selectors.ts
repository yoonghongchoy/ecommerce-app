import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../../store/rootReducer';

const _productSelector = (state: RootState) => state.products;

export const ProductSelectors = {
  products: createSelector(_productSelector, state => state.products),
  filteredProducts: createSelector(
    _productSelector,
    state => state.filteredProducts,
  ),
  loading: createSelector(_productSelector, state => state.loading),
  error: createSelector(_productSelector, state => state.error),
  cachedQuery: createSelector(_productSelector, state => state.cachedQuery),
} as const;
