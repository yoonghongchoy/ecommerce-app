import {createAction} from '@reduxjs/toolkit';
import {Product} from '../../api/products/types';

export const ProductActions = {
  fetchProductsRequest: createAction('products/fetchProductsRequest'),
  fetchProductsSuccess: createAction<Product[]>(
    'products/fetchProductsSuccess',
  ),
  fetchProductsFailure: createAction<string>('products/fetchProductsFailure'),

  searchProductsRequest: createAction<string>('products/searchProductsRequest'),
  searchProductsSuccess: createAction<{query: string; results: Product[]}>(
    'products/searchProductsSuccess',
  ),
  searchProductsFailure: createAction<string>('products/searchProductsFailure'),
} as const;
