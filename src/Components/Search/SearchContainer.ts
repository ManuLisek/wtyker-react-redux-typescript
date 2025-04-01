import { connect, ConnectedProps } from 'react-redux';
import Search from './Search';
import { changeSearchPhrase } from '../../redux/filtersRedux';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeSearchPhrase: (phrase: string) => dispatch(changeSearchPhrase(phrase)),
});

const connector = connect(null, mapDispatchToProps);
export type SearchContainerProps = ConnectedProps<typeof connector>;

export default connector(Search);
