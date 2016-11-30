import React from 'react';
import { connect } from 'react-redux';

import TileFavouriteButton from './TileFavouriteButton';
import { toggleFavouriteSong } from '../actions/Favourites';

class TileFavouriteSong extends React.Component {

  onToggleFavourite = () => this.props.dispatch(toggleFavouriteSong(this.props.trackId));

  render() {
    return (
      <TileFavouriteButton
        isFavourite={this.props.isFavourite}
        onToggleFavourite={this.onToggleFavourite}
      />
    );
  }
}

TileFavouriteSong.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  isFavourite: React.PropTypes.bool.isRequired,
  trackId: React.PropTypes.number,
};

export default connect((store, props) => ({
  isFavourite: store.Favourites.songs.includes(props.trackId),
}))(TileFavouriteSong);
