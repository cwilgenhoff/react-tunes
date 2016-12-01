import React from 'react';

const TileFavouriteButton = ({ onToggleFavourite, isFavourite }) => {
  return (
    <button
      className="tile__tags__tag tile__tags__tag--favourite"
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
