import React from 'react';

const TileDetails = ({ collectionName, trackName, artistName }) => {
  return (
    <div className="tile__details">
      {
        artistName ?
          <span className="tile__details__artist" title={artistName}>
            {artistName.toUpperCase()}
          </span> : false
      }
      {
        collectionName ?
          <span className="tile__details__album" title={collectionName}>
            {collectionName}
          </span> : false
      }
      {
        trackName ?
          <span className="tile__details__song" title={trackName}>
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
