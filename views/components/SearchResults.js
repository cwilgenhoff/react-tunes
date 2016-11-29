import React from 'react';
import _ from 'lodash';
import SearchResult from './SearchResult';

const SearchResults = ({ results, info, onShowMore }) => {
  return (
    <div>
      <p>{info}</p>
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
        <div className="clearfix"></div>
      </div>
      <div className="row">
        <div className="col-xs-12 text-center">
          {
            results.length > 0 ?
              <button className="rt-button" onClick={onShowMore}>SHOW MORE</button> :
              <p>
                Welcome! Please, feel free to search about your favourite artist, album or song.
              </p>
          }
        </div>
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  onShowMore: React.PropTypes.func.isRequired,
  results: React.PropTypes.array.isRequired,
  info: React.PropTypes.string,
};

export default SearchResults;
