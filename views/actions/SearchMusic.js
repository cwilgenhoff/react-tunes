import ACTIONS from '../actions';
import ENTITIES from '../constants/Entities';
import MEDIA from '../constants/Media';
import ApiClient from '../utils/ApiClient';

export const searchByArtist = (term) => {
  ApiClient.search({
    term,
    entity: ENTITIES.ARTIST,
    media: MEDIA.MUSIC,
  }).then(
    (result) => { console.log(result); },
    (error) => { console.log(error); }
  );
};

export const searchByAlbum = (term) => {
  ApiClient.search({
    term,
    entity: ENTITIES.ALBUM,
    media: MEDIA.MUSIC,
  }).then(
    (result) => { console.log(result); },
    (error) => { console.log(error); }
  );
};

export const searchBySong = (term) => {
  ApiClient.search({
    term,
    entity: ENTITIES.SONG,
    media: MEDIA.MUSIC,
  }).then(
    (result) => { console.log(result); },
    (error) => { console.log(error); }
  );
};

export const search = ({ entity, term }) => (dispatch) => {
  switch (entity) {
    case ENTITIES.ARTIST:
      return dispatch(searchByArtist(term));
    case ENTITIES.ALBUM:
      return dispatch(searchByAlbum(term));
    case ENTITIES.SONG:
      return dispatch(searchBySong(term));
    default:
      return Promise.reject();
  }
};

export default search;
