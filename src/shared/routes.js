const API_ROOT = 'https://fakestoreapi.com';

export const getAllCategories = () => `${API_ROOT}/products/categories`;
export const getProductsForCategory = category => `${API_ROOT}/products/category/${category}`;
export const getCart = () => `${API_ROOT}/carts/2`;
export const getProduct = id => `${API_ROOT}/products/${id}`;
