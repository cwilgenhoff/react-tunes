import React from 'react';
import _ from 'lodash';
import SearchResult from './SearchResult';

const SearchResults = ({ results, resultsMessage, onShowMore, isSearching }) => {
  return (
    <div>
      <div className="row">
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
      <div className="row">
        <div className="col-xs-12 text-center">
          {
            results.length === 0 && resultsMessage ?
              <p className="search__message">{resultsMessage}</p> : false
          }
          {
            results.length === 0 && isSearching ?
              <p className="search__message">Searching...</p> : false
          }
          {
            results.length > 0 ?
              <button className="rt-button search__results__show-more" onClick={onShowMore}>SHOW MORE</button> : false
          }
        </div>
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  results: React.PropTypes.array.isRequired,
  onShowMore: React.PropTypes.func.isRequired,
  isSearching: React.PropTypes.bool.isRequired,
  resultsMessage: React.PropTypes.string,
};

export default SearchResults;
