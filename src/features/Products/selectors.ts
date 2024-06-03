import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../../store/rootReducer';

const _productSelector = (state: RootState) => state.products;

export const ProductSelectors = {
  products: createSelector(_productSelector, state => state.products),
  loading: createSelector(_productSelector, state => state.loading),
  error: createSelector(_productSelector, state => state.error),
} as const;
