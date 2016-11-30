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

export const toggleFavouriteSong = id => (dispatch, getState) => {
  const { songs } = getState().Favourites;
  const isFavourite = songs.includes(id);
  if (isFavourite) {
    return dispatch(addFavouriteSong(id));
  }

  return dispatch(removeFavouriteSong(id));
};

export const toggleFavouriteAlbum = id => (dispatch, getState) => {
  const { albums } = getState().Favourites;
  const isFavourite = albums.includes(id);
  if (isFavourite) {
    return dispatch(removeFavouriteAlbum(id));
  }

  return dispatch(addFavouriteAlbum(id));
};
