import React from 'react';

const TileDetails = ({ collectionName, trackName, artistName }) => {
  return (
    <div>
      {
        artistName ?
          <span className="search__results__result__artist" title={artistName}>
            {artistName.toUpperCase()}
          </span> : false
      }
      {
        collectionName ?
          <span className="search__results__result__album" title={collectionName}>
            {collectionName}
          </span> : false
      }
      {
        trackName ?
          <span className="search__results__result__song" title={trackName}>
            {trackName}
          </span> : false
      }
    </div>
  );
};

TileDetails.propTypes = {
  artistName: React.PropTypes.string.isRequired,
  collectionName: React.PropTypes.string,
  trackName: React.PropTypes.string,
};

export default TileDetails;
