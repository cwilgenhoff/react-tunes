import ACTIONS from '../actions';
import MEDIA from '../constants/Media';

import { search as searchMusic } from './SearchMusic';

export const searchStarted = params => ({
  type: ACTIONS.SEARCH.SEARCH_STARTED,
  params,
});

export const searchResultMessage = message => ({
  type: ACTIONS.SEARCH.SEARCH_RESULT_MESSAGE,
  message,
});

export const search = params => (dispatch) => {
  dispatch(searchStarted(params));
  switch (params.media) {
    case MEDIA.MUSIC:
      return dispatch(searchMusic(params));
    default:
      return false;
  }
};

export default search;
