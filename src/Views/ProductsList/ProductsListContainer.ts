import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import ProductsList from './ProductsList';
import { ProductType, RootState } from '../../types/types';
import { setProducts } from '../../redux/productsListRedux';

const mapStateToProps = (state: RootState) => ({
  products: state.products,
  filters: state.filters,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setProducts: (products: ProductType[]) => dispatch(setProducts(products)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductsList);
