import { combineReducers, createStore, Store, AnyAction } from 'redux';
import { persistStore, persistReducer, Persistor, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import filtersReducer from './filtersRedux';
import cartReducer from './cartRedux';
import productsReducer from './productsListRedux';
import { FiltersState, CartState } from '../types/types';

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

const rootReducer = combineReducers({
  products: productsReducer,
  filters: filtersReducer,
  cart: cartReducer,
});

type RootReducerState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<RootReducerState> = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer<RootReducerState>(persistConfig, rootReducer);

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => any;
  }
}

export const store: Store<RootReducerState & PersistPartial, AnyAction> = createStore(
  persistedReducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__?.(),
);

export const persistor: Persistor = persistStore(store);
