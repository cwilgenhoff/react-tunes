import ACTIONS from '../actions';

const InitialState = {
  isSearching: false,
  results: null,
};

const SearchReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.SEARCH.STARTED:
      return {
        isSearching: true,
        query: action.params,
        results: null,
      };
    case ACTIONS.SEARCH.RESULT.SUCCESS:
      return {
        isSearching: false,
        query: state.query,
        results: action.results,
      };
    default:
      return state;
  }
};

export default SearchReducer;
