import React from 'react';
import _ from 'lodash';
import SearchResult from './SearchResult';

const SearchResults = ({ results }) => {
  return (
    <div className="container-fluid">
      {
        results.map(({ collectionName, trackName, artistName, artworkUrl100 }) =>
          <SearchResult
            key={_.uniqueId()}
            collectionName={collectionName}
            trackName={trackName}
            artistName={artistName}
            artworkUrl100={artworkUrl100}
          />
        )
      }
    </div>
  );
};

SearchResults.propTypes = {
  results: React.PropTypes.array,
};

export default SearchResults;
