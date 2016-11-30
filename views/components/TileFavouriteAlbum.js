import React from 'react';
import { connect } from 'react-redux';

import TileFavouriteButton from './TileFavouriteButton';
import { toggleFavouriteAlbum } from '../actions/Favourites';

class TileFavouriteAlbum extends React.Component {

  onToggleFavourite = () => this.props.dispatch(toggleFavouriteAlbum(this.props.collectionId));

  render() {
    return (
      <TileFavouriteButton
        isFavourite={this.props.isFavourite}
        onToggleFavourite={this.onToggleFavourite}
      />
    );
  }
}

TileFavouriteAlbum.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  isFavourite: React.PropTypes.bool.isRequired,
  collectionId: React.PropTypes.number,
};

export default connect((store, props) => ({
  isFavourite: store.Favourites.albums.includes(props.collectionId),
}))(TileFavouriteAlbum);
