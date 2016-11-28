import ACTIONS from '../actions';
import ENTITIES from '../constants/Entities';
import MEDIA from '../constants/Media';
import ApiClient from '../utils/ApiClient';

export const searchResultSuccess = results => ({
  type: ACTIONS.SEARCH.SEARCH_RESULT_SUCCESS,
  results,
});

export const searchPartialResultSuccess = results => ({
  type: ACTIONS.SEARCH.SEARCH_PARTIAL_RESULT_SUCCESS,
  results,
});

export const searchResultFailure = results => ({
  type: ACTIONS.SEARCH.SEARCH_RESULT_FAILURE,
  results,
});

export const searchByEntity = (entity, term) => (dispatch) => {
  return ApiClient.search({
    term,
    entity,
    media: MEDIA.MUSIC,
  }).then(
    response => dispatch(searchResultSuccess(response.results)),
    error => dispatch(searchResultFailure(error))
  );
};

export const searchAlbumsByArtistId = artistId => (dispatch) => {
  return ApiClient.lookUp({
    id: artistId,
    entity: ENTITIES.ALBUM,
  }).then(
    response => dispatch(searchPartialResultSuccess(
      response.results.filter(result => result.collectionType))
    ),
    error => dispatch(searchResultFailure(error))
  );
};

export const searchAlbumsFromResults = results => (dispatch) => {
  return results.forEach(({ artistId }) =>
    dispatch(searchAlbumsByArtistId(artistId))
  );
};

export const searchByArtist = term => (dispatch) => {
  return ApiClient.search({
    term,
    entity: ENTITIES.ARTIST,
    media: MEDIA.MUSIC,
  }).then(
    ({ results }) => dispatch(searchAlbumsFromResults(results)),
    error => dispatch(searchResultFailure(error))
  );
};

export const search = ({ entity, term }) => (dispatch) => {
  switch (entity) {
    case ENTITIES.ARTIST:
      return dispatch(searchByArtist(term));
    case ENTITIES.ALBUM:
      return dispatch(searchByEntity(ENTITIES.ALBUM, term));
    case ENTITIES.SONG:
      return dispatch(searchByEntity(ENTITIES.SONG, term));
    default:
      return Promise.reject();
  }
};

export default search;
