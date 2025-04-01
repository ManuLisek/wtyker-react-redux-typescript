import { connect, ConnectedProps } from 'react-redux';
import Navigation from './Navigation';
import { getCart } from '../../redux/cartRedux';
import { RootState } from '../../types/types';

const mapStateToProps = (state: RootState) => ({
  cart: getCart(state),
});

const connector = connect(mapStateToProps);

export type NavigationContainerProps = ConnectedProps<typeof connector>;

export default connector(Navigation);
