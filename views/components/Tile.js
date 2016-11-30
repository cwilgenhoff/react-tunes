import React from 'react';

import TileArtwork from './TileArtwork';
import TileDetails from './TileDetails';
import TileTags from './TileTags';
import TileFavourite from './TileFavourite';

const Tile = ({ artworkUrl100, artistName, collectionName, trackName, wrapperType, trackId, collectionId }) => {
  return (
    <div className="col-xs-12 col-sm-3 col-md-3 search__results__result">
      <TileArtwork artworkUrl={artworkUrl100} />
      <div className="search__results__result__description">
        <TileDetails
          artistName={artistName}
          collectionName={collectionName}
          trackName={trackName}
        />
        <div className="search__results__result__tags">
          <TileTags wrapperType={wrapperType} />
          <TileFavourite
            wrapperType={wrapperType}
            trackId={trackId}
            collectionId={collectionId}
          />
        </div>
      </div>
    </div>
  );
};

Tile.propTypes = {
  wrapperType: React.PropTypes.string.isRequired,
  artworkUrl100: React.PropTypes.string.isRequired,
  artistName: React.PropTypes.string.isRequired,
  collectionName: React.PropTypes.string,
  collectionId: React.PropTypes.number,
  trackName: React.PropTypes.string,
  trackId: React.PropTypes.number,
};

export default Tile;
