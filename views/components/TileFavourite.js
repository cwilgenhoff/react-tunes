import React from 'react';

import WRAPPERS from '../constants/Wrappers';
import TileFavouriteAlbum from './TileFavouriteAlbum';
import TileFavouriteSong from './TileFavouriteSong';

const TileFavourite = ({ mediaElement }) => {
  switch (mediaElement.wrapperType) {
    case WRAPPERS.ALBUM:
      return <TileFavouriteAlbum collectionId={mediaElement.collectionId} />;
    case WRAPPERS.SONG:
      return <TileFavouriteSong trackId={mediaElement.trackId} />;
    default:
      return false;
  }
};

TileFavourite.propTypes = {
  mediaElement: React.PropTypes.object.isRequired,
};

export default TileFavourite;
