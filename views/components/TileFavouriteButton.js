import React from 'react';

const TileFavouriteButton = ({ onToggleFavourite, isFavourite }) => {
  return (
    <button
      className="search__results__result__tags__tag search__results__result__tags__tag--favourite"
      onClick={onToggleFavourite}
    >
      { isFavourite ? '- UNFAVOURITE' : '+ FAVOURITE' }
    </button>
  );
};

TileFavouriteButton.propTypes = {
  isFavourite: React.PropTypes.bool.isRequired,
  onToggleFavourite: React.PropTypes.func.isRequired,
};

export default TileFavouriteButton;
