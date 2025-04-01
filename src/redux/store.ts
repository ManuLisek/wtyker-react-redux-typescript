import { products } from '../data/products/products';
import { combineReducers, createStore, Store, AnyAction } from 'redux';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filtersReducer from './filtersRedux';
import cartReducer from './cartRedux';
import { FiltersState, CartState, RootState, PersistState, ProductType } from '../types/types';

export const filtersInitialState: FiltersState = {
  searchPhrase: '',
  checkedTags: [],
  checkedBrands: [],
  price: {
    from: 50,
    to: 3400,
  },
  sortingKey: '---',
};

export const cartInitialState: CartState = {
  productsInCart: [],
  totalQuantity: 0,
  totalPrice: 0,
  delivery: 20,
};

const initialState: RootState = {
  products,
  filters: filtersInitialState,
  cart: cartInitialState,
  _persist: {
    rehydrated: false,
    version: -1,
  },
};

const reducers = {
  products: (state: ProductType[] = initialState.products) => state,
  filters: filtersReducer,
  cart: cartReducer,
  _persist: (state: PersistState = initialState._persist) => state,
};

const combinedReducers = combineReducers(reducers);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => any;
  }
}

export const store: Store<RootState, AnyAction> = createStore(persistedReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__?.());

export const persistor: Persistor = persistStore(store);
