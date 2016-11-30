import ACTIONS from '../actions';

export const addFavouriteSong = id => ({
  type: ACTIONS.FAVOURITES.ADD_FAVOURITE_SONG,
  id,
});

export const removeFavouriteSong = id => ({
  type: ACTIONS.FAVOURITES.REMOVE_FAVOURITE_SONG,
  id,
});

export const addFavouriteAlbum = id => ({
  type: ACTIONS.FAVOURITES.ADD_FAVOURITE_ALBUM,
  id,
});

export const removeFavouriteAlbum = id => ({
  type: ACTIONS.FAVOURITES.REMOVE_FAVOURITE_ALBUM,
  id,
});
