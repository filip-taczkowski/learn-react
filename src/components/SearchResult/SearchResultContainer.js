/* Import NPm */ 
import {connect} from 'react-redux';
/* Import JS */ 
import SearchResult from './SearchResult';
import { getSearchCards } from '../../redux/cardRedux';
import { createAction_changeSearchString } from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => ({
  cards: getSearchCards(state, props.match.params.id),
  lists: state.app.lists,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);