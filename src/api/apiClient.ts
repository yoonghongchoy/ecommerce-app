import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  // timeout: 1000,
});

export default apiClient;
