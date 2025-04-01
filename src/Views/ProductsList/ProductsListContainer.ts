import { connect, ConnectedProps } from 'react-redux';
import ProductsList from './ProductsList';
import { getFilteredProducts } from '../../redux/productsListRedux';
import { RootState } from '../../types/types';

const mapStateToProps = (state: RootState) => ({
  products: getFilteredProducts(state),
});

const connector = connect(mapStateToProps);

export type ProductsListContainerProps = ConnectedProps<typeof connector>;

export default connector(ProductsList);
