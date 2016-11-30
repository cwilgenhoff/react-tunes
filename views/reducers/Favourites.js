import _ from 'lodash';
import ACTIONS from '../actions';

const InitialState = {
  songs: [],
  albums: [],
};

const FavouritesReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.FAVOURITES.ADD_FAVOURITE_SONG:
      return {
        ...state,
        songs: [...state.songs, action.id],
      };
    case ACTIONS.FAVOURITES.ADD_FAVOURITE_ALBUM:
      return {
        ...state,
        albums: [...state.albums, action.id],
      };
    case ACTIONS.FAVOURITES.REMOVE_FAVOURITE_SONG:
      return {
        ...state,
        songs: _.difference(state.songs, [action.id]),
      };
    case ACTIONS.FAVOURITES.REMOVE_FAVOURITE_ALBUM:
      return {
        ...state,
        albums: _.difference(state.albums, [action.id]),
      };
    default:
      return state;
  }
};

export default FavouritesReducer;
