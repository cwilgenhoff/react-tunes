import React from 'react';
import { connect } from 'react-redux';

import {
  addFavouriteSong,
  addFavouriteAlbum,
  removeFavouriteSong,
  removeFavouriteAlbum,
} from '../actions/Favourites';

class TileFavourite extends React.Component {
  addOrRemoveFavourite = () => {

  }

  render() {
    return (
      <button
        className="search__results__result__tags_tag search__results__result__tags__tag--like"
        onClick={this.addOrRemoveFavourite}
      >
        + FAVOURITE
      </button>
    );
  }
}

TileFavourite.propTypes = {
  wrapperType: React.PropTypes.string.isRequired,
};

export default connect()(TileFavourite);
