import React from 'react';
import { connect } from 'react-redux';

import WRAPPERS from '../constants/Wrappers';

import {
  toggleFavouriteSong,
  toggleFavouriteAlbum,
} from '../actions/Favourites';

class TileFavourite extends React.Component {

  toggleFavourite = () => {
    switch (this.props.wrapperType) {
      case WRAPPERS.SONG:
        return this.props.dispatch(toggleFavouriteSong(this.props.trackId));
      case WRAPPERS.ALBUM:
        return this.props.dispatch(toggleFavouriteAlbum(this.props.collectionId));
      default:
        return false;
    }
  }

  render() {
    return (
      <button
        className="search__results__result__tags_tag search__results__result__tags__tag--like"
        onClick={this.toggleFavourite}
      >
        + FAVOURITE
      </button>
    );
  }
}

TileFavourite.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  wrapperType: React.PropTypes.string.isRequired,
  favourites: React.PropTypes.object.isRequired,
  collectionId: React.PropTypes.number,
  trackId: React.PropTypes.number,
};

export default connect(store => ({
  favourites: store.Favourites,
}))(TileFavourite);
