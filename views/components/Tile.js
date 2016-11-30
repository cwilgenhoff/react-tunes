import React from 'react';

import TileArtwork from './TileArtwork';
import TileDetails from './TileDetails';
import TileTag from './TileTag';
import TileFavourite from './TileFavourite';

const Tile = ({ mediaElement }) => {
  return (
    <div className="col-xs-12 col-sm-3 col-md-3 search__results__result">
      <TileArtwork artworkUrl={mediaElement.artworkUrl100} />
      <div className="search__results__result__description">
        <TileDetails
          artistName={mediaElement.artistName}
          collectionName={mediaElement.collectionName}
          trackName={mediaElement.trackName}
        />
        <div className="search__results__result__tags">
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
