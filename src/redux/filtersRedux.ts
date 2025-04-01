import { FiltersState, PriceType, ProductType, Action } from '../types/types';

/* SELECTORS */
export const getAllProducts = ({ products }: { products: ProductType[] }) => products;
export const getAllFilters = ({ filters }: { filters: FiltersState }) => filters;
export const getAllTags = ({ products }: { products: ProductType[] }) => {
  const allTags: string[] = [];
  products.forEach((product) => {
    allTags.push(...product.tags);
  });
  return [...new Set(allTags)];
};
export const getAllBrands = ({ products }: { products: ProductType[] }) => {
  const allBrands: string[] = [];
  products.forEach((product) => {
    allBrands.push(product.brand);
  });
  return [...new Set(allBrands)];
};

const reducerName = 'filters';
const createActionName = (name: string) => `app/${reducerName}/${name}`;

export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_PRICE = createActionName('CHANGE_PRICE');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
export const ADD_BRAND = createActionName('ADD_BRAND');
export const REMOVE_BRAND = createActionName('REMOVE_BRAND');
export const CHANGE_KEY = createActionName('CHANGE_KEY');
export const CLEAR_FILTERS = createActionName('CLEAR_FILTERS');

export const changeSearchPhrase = (payload: string) => ({
  payload,
  type: CHANGE_PHRASE,
});
export const changePrice = (payload: Partial<PriceType>) => ({ payload, type: CHANGE_PRICE });
export const addTag = (payload: string) => ({ payload, type: ADD_TAG });
export const removeTag = (payload: string) => ({ payload, type: REMOVE_TAG });
export const addBrand = (payload: string) => ({ payload, type: ADD_BRAND });
export const removeBrand = (payload: string) => ({ payload, type: REMOVE_BRAND });
export const changeSortingKey = (payload: string) => ({ payload, type: CHANGE_KEY });
export const clearFilters = (payload: FiltersState) => ({ payload, type: CLEAR_FILTERS });

export default function reducer(statePart: FiltersState = {} as FiltersState, action: Action): FiltersState {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload as string,
      };
    case CHANGE_PRICE:
      return {
        ...statePart,
        price: { ...statePart.price, ...(action.payload as Partial<PriceType>) },
      };
    case ADD_TAG:
      return {
        ...statePart,
        checkedTags: [...statePart.checkedTags, action.payload as string],
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        checkedTags: statePart.checkedTags.filter((tag) => tag !== action.payload),
      };
    case ADD_BRAND:
      return {
        ...statePart,
        checkedBrands: [...statePart.checkedBrands, action.payload as string],
      };
    case REMOVE_BRAND:
      return {
        ...statePart,
        checkedBrands: statePart.checkedBrands.filter((brand) => brand !== action.payload),
      };
    case CHANGE_KEY:
      return {
        ...statePart,
        sortingKey: action.payload as string,
      };
    case CLEAR_FILTERS:
      return {
        ...statePart,
        ...(action.payload as FiltersState),
      };
    default:
      return statePart;
  }
}
