import React from 'react';
import WRAPPERS from '../constants/Wrappers';

import TileTagAlbum from './TileTagAlbum';
import TileTagSong from './TileTagSong';

const TileTags = ({ wrapperType }) => {
  switch (wrapperType) {
    case WRAPPERS.ALBUM:
      return <TileTagAlbum />;
    case WRAPPERS.SONG:
      return <TileTagSong />;
    default:
      return false;
  }
};

TileTags.propTypes = {
  wrapperType: React.PropTypes.string.isRequired,
};

export default TileTags;
