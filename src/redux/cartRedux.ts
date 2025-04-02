import { ProductInCartType, CartState, Action } from '../types/types';

export const getCart = ({ cart }: { cart: CartState }) => cart;
export const getTotalQuantity = ({ cart }: { cart: CartState }) => {
  const quantityArray = cart.productsInCart.map((product) => product.quantity);
  const totalQuantity = quantityArray.reduce((a, b) => a + b, 0);
  return totalQuantity;
};
export const getTotalPrice = ({ cart }: { cart: CartState }) => {
  const pricesArray = cart.productsInCart.map((product) => product.price * product.quantity);
  const sumOfPrices = pricesArray.reduce((a, b) => a + b, 0);
  const totalPrice = sumOfPrices + cart.delivery;
  return totalPrice;
};

const reducerName = 'cart';
const createActionName = (name: string) => `app/${reducerName}/${name}`;

export const ADD_PRODUCT = createActionName('ADD_PRODUCT');
export const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
export const COUNT_PRODUCTS = createActionName('COUNT_PRODUCTS');
export const INCREASE_QUANTITY = createActionName('INCREASE_QUANTITY');
export const DECREASE_QUANTITY = createActionName('DECREASE_QUANTITY');
export const UPDATE_QUANTITY = createActionName('UPDATE_QUANTITY');
export const COUNT_PRICE = createActionName('COUNT_PRICE');
export const CLEAR_CART = createActionName('CLEAR_CART');

export const addProductToCart = (payload: ProductInCartType) => ({ payload, type: ADD_PRODUCT });
export const removeProductFromCart = (payload: { id: number }) => ({
  payload,
  type: REMOVE_PRODUCT,
});
export const countProductsInCart = (payload: number) => ({
  payload,
  type: COUNT_PRODUCTS,
});
export const increaseQuantityInCart = (payload: ProductInCartType) => ({
  payload,
  type: INCREASE_QUANTITY,
});
export const decreaseQuantityInCart = (payload: ProductInCartType) => ({
  payload,
  type: DECREASE_QUANTITY,
});
export const updateQuantityInCart = (payload: { product: ProductInCartType; newQuantity: number }) => ({
  payload,
  type: UPDATE_QUANTITY,
});
export const countTotalPrice = (payload: number) => ({ payload, type: COUNT_PRICE });
export const clearCart = (payload: CartState) => ({ payload, type: CLEAR_CART });

export default function reducer(statePart: CartState = {} as CartState, action: Action): CartState {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...statePart,
        productsInCart: [...statePart.productsInCart, action.payload as ProductInCartType],
      };
    case REMOVE_PRODUCT:
      return {
        ...statePart,
        productsInCart: statePart.productsInCart.filter((product) => product.id !== (action.payload as { id: number }).id),
      };
    case COUNT_PRODUCTS:
      return {
        ...statePart,
        totalQuantity: action.payload as number,
      };
    case INCREASE_QUANTITY:
      return {
        ...statePart,
        productsInCart: statePart.productsInCart.map((product) => {
          const payload = action.payload as ProductInCartType;
          if (product.id === payload.id) {
            return {
              ...product,
              quantity: payload.quantity + 1,
            };
          }
          return product;
        }),
      };
    case DECREASE_QUANTITY:
      return {
        ...statePart,
        productsInCart: statePart.productsInCart.map((product) => {
          const payload = action.payload as ProductInCartType;
          if (product.id === payload.id) {
            return {
              ...product,
              quantity: payload.quantity - 1,
            };
          }
          return product;
        }),
      };
    case UPDATE_QUANTITY:
      const { product, newQuantity } = action.payload as { product: ProductInCartType; newQuantity: number };
      return {
        ...statePart,
        productsInCart: statePart.productsInCart.map((p) => {
          if (p.id === product.id) {
            return {
              ...p,
              quantity: newQuantity,
            };
          }
          return p;
        }),
      };
    case COUNT_PRICE:
      return {
        ...statePart,
        totalPrice: action.payload as number,
      };
    case CLEAR_CART:
      return {
        ...statePart,
        ...(action.payload as CartState),
      };
    default:
      return statePart;
  }
}
