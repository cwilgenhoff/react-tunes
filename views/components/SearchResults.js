import React from 'react';
import _ from 'lodash';
import SearchResult from './SearchResult';

const SearchResults = ({ results }) => {
  return (
    <div className="search__results">
      {
        results.map(result => <SearchResult key={_.uniqueId()} {...result} />)
      }
    </div>
  );
};

SearchResults.propTypes = {
  results: React.PropTypes.array,
};

export default SearchResults;
