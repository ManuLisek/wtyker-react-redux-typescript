import axios from 'axios';
import { ProductType } from '../types/types';

interface GetProductsResponse {
  products: ProductType[];
}

interface GetProductResponse {
  product: ProductType;
}

const instance = axios.create({
  baseURL: '/',
});

const url = '/products.json';

export const getProducts = () =>
  instance({
    method: 'GET',
    url: url,
    transformResponse: [
      (response: string): GetProductsResponse => {
        const products: ProductType[] = JSON.parse(response);
        return {
          products: products,
        };
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

        const transformedProduct: ProductType = {
          id: foundProduct.id,
          title: foundProduct.title,
          price: foundProduct.price,
          brand: foundProduct.brand,
          description: foundProduct.description,
          tags: foundProduct.tags,
          image1: foundProduct.image1,
          image2: foundProduct.image2,
        };

        return {
          product: transformedProduct,
        };
      },
    ],
  });
