const ProductEndpoints = {
  getAllProducts: '/products',
  getProductById: (id: number) => `/products/${id}`,
} as const;

export default ProductEndpoints;
