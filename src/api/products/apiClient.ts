import apiClient from '../apiClient';
import endpoints from './endpoints';
import {Product} from './types';

export const fetchAllProducts = async () => {
  const response = await apiClient.get<Product[]>(endpoints.getAllProducts);
  return response.data;
};

export const fetchProductById = async (id: number) => {
  const response = await apiClient.get<Product>(endpoints.getProductById(id));
  return response.data;
};
