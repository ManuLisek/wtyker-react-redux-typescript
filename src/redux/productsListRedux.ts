import { Action, ProductType, FiltersState } from '../types/types';

export const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = (products: ProductType[]) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const getFilteredProducts = ({ products, filters }: { products: ProductType[]; filters: FiltersState }) => {
  let output = [...products];

  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter((product) => pattern.test(product.title));
  }

  output = output.filter((product) => product.price >= filters.price.from && product.price <= filters.price.to);

  if (filters.checkedTags.length > 0) {
    output = output.filter((product) => filters.checkedTags.every((tag) => product.tags.includes(tag)));
  }

  if (filters.checkedBrands.length > 0) {
    output = output.filter((product) => filters.checkedBrands.includes(product.brand));
  }

  if (filters.sortingKey === 'Alfabetycznie') {
    output.sort((a, b) => a.title.localeCompare(b.title));
  } else if (filters.sortingKey === 'Po cenie: rosnąco') {
    output.sort((a, b) => a.price - b.price);
  } else if (filters.sortingKey === 'Po cenie: malejąco') {
    output.sort((a, b) => b.price - a.price);
  }

  return output;
};

export default function reducer(state: ProductType[] = [], action: Action): ProductType[] {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload as ProductType[];
    default:
      return state;
  }
}
