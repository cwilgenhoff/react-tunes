import React from 'react';
import WRAPPERS from '../constants/Wrappers';

const TileTags = ({ wrapperType }) => {
  return (
    <div>
      {
        wrapperType === WRAPPERS.ALBUM ?
          <span className="search__results__result__tags_tag search__results__result__tags__tag--album">
            ALBUM
          </span> : false
      }
      {
        wrapperType === WRAPPERS.SONG ?
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
