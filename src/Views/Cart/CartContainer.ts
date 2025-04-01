import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import Cart from '../Cart/Cart';
import { getCart, clearCart } from '../../redux/cartRedux';
import { CartState, RootState } from '../../types/types';

const mapStateToProps = (state: RootState) => ({
  cart: getCart(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearCart: (emptyCart: CartState) => dispatch(clearCart(emptyCart)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type CartContainerProps = ConnectedProps<typeof connector>;

export default connector(Cart);
