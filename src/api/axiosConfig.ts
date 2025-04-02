import axios from 'axios';
import { ProductType } from '../types/types';

interface GetProductsResponse {
  products: ProductType[];
}

interface GetProductResponse {
  product: ProductType;
}

const instance = axios.create({
  baseURL: process.env.PUBLIC_URL,
});

const url = '/products.json';

export const getProducts = () =>
  instance({
    method: 'GET',
    url: url,
    transformResponse: [
      (response: string): GetProductsResponse => {
        const products: ProductType[] = JSON.parse(response);
        return { products };
      },
    ],
  });

export const getProduct = (id: number) =>
  instance({
    method: 'GET',
    url: url,
    transformResponse: [
      (response: string): GetProductResponse => {
        const products: ProductType[] = JSON.parse(response);
        const foundProduct = products.find((product) => product.id === id);
        if (!foundProduct) {
          throw new Error(`Nie znaleziono takiego produktu.`);
        }
        return { product: foundProduct };
      },
    ],
  });
