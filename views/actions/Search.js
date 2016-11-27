import ACTIONS from '../actions';
import MEDIA from '../constants/Media';

import { search as searchMusic } from './SearchMusic';

export const searchStarted = (media) => ({
  type: ACTIONS.SEARCH.STARTED,
  media,
});

export const search = ({ media, ...rest }) => (dispatch) => {
  dispatch(searchStarted(media));
  switch (media) {
    case MEDIA.MUSIC:
      return dispatch(searchMusic(rest));
    default:
      return false;
  }
};

export default search;
