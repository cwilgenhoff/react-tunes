import ACTIONS from '../actions';

const InitialState = {
  isSearching: false,
  hasSearched: false,
  resultsMessage: '',
  results: [],
};

const SearchReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.SEARCH.SEARCH_STARTED:
      return {
        isSearching: true,
        hasSearched: true,
        query: action.params,
        info: '',
        results: [],
      };
    case ACTIONS.SEARCH.SEARCH_RESULT_MESSAGE:
      return {
        ...state,
        isSearching: false,
        resultsMessage: action.info,
      };
    case ACTIONS.SEARCH.SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        isSearching: false,
        results: [...action.results],
      };
    case ACTIONS.SEARCH.SEARCH_RESULT_FAILURE:
      return {
        ...state,
        isSearching: false,
      }
    default:
      return state;
  }
};

export default SearchReducer;
