import ACTIONS from '../actions';
import ENTITIES from '../constants/Entities';
import ATTRIBUTES from '../constants/Attributes';
import MEDIA from '../constants/Media';
import ApiClient from '../utils/ApiClient';

export const searchResultSuccess = results => ({
  type: ACTIONS.SEARCH.SEARCH_RESULT_SUCCESS,
  results,
});

export const searchResultFailure = results => ({
  type: ACTIONS.SEARCH.SEARCH_RESULT_FAILURE,
  results,
});

export const searchByAttribute = (attribute, entity, term) => (dispatch) => {
  return ApiClient.search({
    term,
    attribute,
    entity,
    media: MEDIA.MUSIC,
  }).then(
    response => dispatch(searchResultSuccess(response.results)),
    error => dispatch(searchResultFailure(error))
  );
};

export const search = ({ attribute, term }) => (dispatch) => {
  switch (attribute) {
    case ATTRIBUTES.ALBUM:
      return dispatch(searchByAttribute(ATTRIBUTES.ALBUM, ENTITIES.ALBUM, term));
    case ATTRIBUTES.SONG:
      return dispatch(searchByAttribute(ATTRIBUTES.SONG, ENTITIES.SONG, term));
    case ATTRIBUTES.ARTIST:
      return dispatch(searchByAttribute(ATTRIBUTES.ARTIST, ENTITIES.ALL, term));
    default:
      return Promise.reject();
  }
};

export default search;
