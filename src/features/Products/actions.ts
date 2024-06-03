import {createAction} from '@reduxjs/toolkit';
import {Product} from '../../api/products/types';

export const ProductActions = {
  fetchProductsRequest: createAction('products/fetchProductsRequest'),
  fetchProductsSuccess: createAction<Product[]>(
    'products/fetchProductsSuccess',
  ),
  fetchProductsFailure: createAction<string>('products/fetchProductsFailure'),
} as const;
