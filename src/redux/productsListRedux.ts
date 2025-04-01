import { ProductType, FiltersState } from '../types/types';

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
