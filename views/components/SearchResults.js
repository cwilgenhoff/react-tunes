import _ from 'lodash';
import React from 'react';
import Tile from './Tile';

const SearchResults = ({ results, resultsMessage, onShowMore, isSearching }) => {
  return (
    <div>
      <div className="row">
        {
          results.map(result => <Tile key={_.uniqueId()}  mediaElement={result} />)
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
