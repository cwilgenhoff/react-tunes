import ACTIONS from '../actions';

const InitialState = {
  isSearching: false,
  info: '',
  results: [],
};

const SearchReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.SEARCH.SEARCH_STARTED:
      return {
        isSearching: true,
        query: action.params,
        info: '',
        results: [],
      };
    case ACTIONS.SEARCH.SEARCH_RESULT_INFO:
      return {
        ...state,
        isSearching: false,
        info: action.info,
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
    default:
      return state;
  }
};

export default SearchReducer;
