import React from 'react';

const SearchResult = ({ collectionName, trackName, artistName, artworkUrl100 }) => {
  return (
    <div className="search__results__result">
      <div>
        <img src={artworkUrl100.replace('100x100bb', '250x250bb')} alt={artistName} />
      </div>
      <span className="search__results__result__field">Artist: {artistName}</span>
      { trackName ? <span className="search__results__result__field">Track: {trackName}</span> : '' }
      { collectionName ? <span className="search__results__result__field">Album: {collectionName}</span> : '' }
    </div>
  );
};

SearchResult.propTypes = {
  artistName: React.PropTypes.string.isRequired,
  artworkUrl100: React.PropTypes.string.isRequired,
  trackName: React.PropTypes.string,
  collectionName: React.PropTypes.string,
};

export default SearchResult;
