import ACTIONS from '../actions';
import ENTITIES from '../constants/Entities';
import MEDIA from '../constants/Media';
import ApiClient from '../utils/ApiClient';

export const searchResultSuccess = results => ({
  type: ACTIONS.SEARCH.RESULT.SUCCESS,
  results,
})

export const searchResultFailure = results => ({
  type: ACTIONS.SEARCH.RESULT.FAILURE,
  results,
})

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

export const search = ({ entity, term }) => (dispatch) => {
  switch (entity) {
    case ENTITIES.ARTIST:
      return dispatch(searchByEntity(ENTITIES.ARTIST, term));
    case ENTITIES.ALBUM:
      return dispatch(searchByEntity(ENTITIES.ALBUM, term));
    case ENTITIES.SONG:
      return dispatch(searchByEntity(ENTITIES.SONG, term));
    default:
      return Promise.reject();
  }
};

export default search;
