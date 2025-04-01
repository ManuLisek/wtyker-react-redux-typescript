import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import ProductInCart from './ProductInCart';
import {
  getTotalQuantity,
  getCart,
  getTotalPrice,
  removeProductFromCart,
  countProductsInCart,
  increaseQuantityInCart,
  decreaseQuantityInCart,
  countTotalPrice,
} from '../../redux/cartRedux';
import { RootState, ProductInCartType } from '../../types/types';

const mapStateToProps = (state: RootState) => ({
  cart: getCart(state),
  totalQuantity: getTotalQuantity(state),
  totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeProductFromCart: (product: { id: number }) => dispatch(removeProductFromCart(product)),
  countProductsInCart: (quantity: number) => dispatch(countProductsInCart(quantity)),
  increaseQuantityInCart: (product: ProductInCartType) => dispatch(increaseQuantityInCart(product)),
  decreaseQuantityInCart: (product: ProductInCartType) => dispatch(decreaseQuantityInCart(product)),
  countTotalPrice: (price: number) => dispatch(countTotalPrice(Number(price.toFixed(2)))),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type ProductInCartContainerProps = ConnectedProps<typeof connector>;

export default connector(ProductInCart);
