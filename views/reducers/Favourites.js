import ACTIONS from '../actions';

const InitialState = {
  favourites: {
    songs: [],
    albums: [],
  },
};

const FavouritesReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.FAVOURITES.ADD_FAVOURITE_SONG:
      return {
        ...state,
      };
    case ACTIONS.FAVOURITES.REMOVE_FAVOURITE_SONG:
      return {
        ...state,
      };
    case ACTIONS.FAVOURITES.ADD_FAVOURITE_ALBUM:
      return {
        ...state,
      };
    case ACTIONS.FAVOURITES.REMOVE_FAVOURITE_ALBUM:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default FavouritesReducer;
