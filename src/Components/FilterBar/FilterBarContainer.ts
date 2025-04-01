import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import FilterBar from './FilterBar';
import {
  getAllFilters,
  getAllTags,
  getAllBrands,
  changePrice,
  addTag,
  removeTag,
  addBrand,
  removeBrand,
  changeSortingKey,
  clearFilters,
} from '../../redux/filtersRedux';
import { RootState, PriceType } from '../../types/types';

const mapStateToProps = (state: RootState) => ({
  filters: getAllFilters(state),
  tags: getAllTags(state),
  brands: getAllBrands(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changePrice: (type: 'from' | 'to', value: string) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      dispatch(changePrice({ [type]: numericValue } as Partial<PriceType>));
    }
  },
  addTag: (tag: string) => dispatch(addTag(tag)),
  removeTag: (tag: string) => dispatch(removeTag(tag)),
  addBrand: (brand: string) => dispatch(addBrand(brand)),
  removeBrand: (brand: string) => dispatch(removeBrand(brand)),
  changeSortingKey: (sortingKey: string) => dispatch(changeSortingKey(sortingKey)),
  clearFilters: () =>
    dispatch(
      clearFilters({
        searchPhrase: '',
        checkedTags: [],
        checkedBrands: [],
        price: {
          from: 50,
          to: 3400,
        },
        sortingKey: '---',
      }),
    ),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type FilterBarContainerProps = ConnectedProps<typeof connector>;

export default connector(FilterBar);
