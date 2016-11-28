import ACTIONS from '../actions';

const InitialState = {
  isSearching: false,
  results: [],
};

const SearchReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.SEARCH.SEARCH_STARTED:
      return {
        isSearching: true,
        query: action.params,
        results: [],
      };
    case ACTIONS.SEARCH.SEARCH_RESULT_SUCCESS:
      return {
        isSearching: false,
        query: state.query,
        results: [...action.results],
      };
    case ACTIONS.SEARCH.SEARCH_RESULT_FAILURE:
      return {
        ...state,
        isSearching: false,
      }
    case ACTIONS.SEARCH.SEARCH_PARTIAL_RESULT_SUCCESS:
      return {
        isSearching: false,
        query: state.query,
        results: [
          ...state.results,
          ...action.results,
        ],
      };
    default:
      return state;
  }
};

export default SearchReducer;
