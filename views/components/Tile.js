import React from 'react';

import TileArtwork from './TileArtwork';
import TileDetails from './TileDetails';
import TileTag from './TileTag';
import TileFavourite from './TileFavourite';

import Style from '../styles/Tile.scss';

const Tile = ({ mediaElement }) => {
  return (
    <div className="col-xs-12 col-sm-3 col-md-3 tile">
      <TileArtwork artworkUrl={mediaElement.artworkUrl100} />
      <div>
        <TileDetails
          artistName={mediaElement.artistName}
          collectionName={mediaElement.collectionName}
          trackName={mediaElement.trackName}
        />
        <div className="tile__tags">
          <TileTag wrapperType={mediaElement.wrapperType} />
          <TileFavourite
            mediaElement={mediaElement}
          />
        </div>
      </div>
    </div>
  );
};

Tile.propTypes = {
  mediaElement: React.PropTypes.object.isRequired,
};

export default Tile;
