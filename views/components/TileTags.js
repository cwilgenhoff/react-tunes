import React from 'react';

const TileTags = ({ wrapperType }) => {
  return (
    <div>
      {
        wrapperType === 'collection' ?
          <span className="search__results__result__tags_tag search__results__result__tags__tag--album">
            ALBUM
          </span> : false
      }
      {
        wrapperType === 'track' ?
          <span className="search__results__result__tags_tag search__results__result__tags__tag--song">
            SONG
          </span> : false
      }
    </div>
  );
};

TileTags.propTypes = {
  wrapperType: React.PropTypes.string.isRequired,
};

export default TileTags;
