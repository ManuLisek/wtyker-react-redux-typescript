import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import Product from './Product';
import { getCart, getTotalQuantity, getTotalPrice, addProductToCart, countProductsInCart, countTotalPrice } from '../../redux/cartRedux';
import { getAllProducts } from '../../redux/filtersRedux';
import { ProductInCartType, RootState } from '../../types/types';

const mapStateToProps = (state: RootState) => ({
  cart: getCart(state),
  products: getAllProducts(state),
  totalQuantity: getTotalQuantity(state),
  totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addProductToCart: (productToCart: ProductInCartType) => dispatch(addProductToCart(productToCart)),
  countProductsInCart: (totalQuantity: number) => dispatch(countProductsInCart(totalQuantity)),
  countTotalPrice: (price: number) => dispatch(countTotalPrice(Number(price.toFixed(2)))),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type ProductContainerProps = ConnectedProps<typeof connector>;

export default connector(Product);
