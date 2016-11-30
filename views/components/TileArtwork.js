import React from 'react';
import { connect } from 'react-redux';

import {
  addEventListener,
  removeEventListener,
  measureRenderedElementByClassName,
} from '../actions/Browser';

class TileArtwork extends React.Component {
  constructor(props) {
    super(props);
    this.measureArtworkWidthDebounced = _.debounce(this.measureArtworkWidth, 200);
  }

  componentDidMount() {
    this.measureArtworkWidth();
    this.props.dispatch(addEventListener('SearchResult', 'resize', this.measureArtworkWidthDebounced));
  }

  componentWilUnmount() {
    this.props.dispatch(removeEventListener('SearchResult', 'resize', this.measureArtworkWidthDebounced));
  }

  measureArtworkWidth = () => {
    this.props.dispatch(measureRenderedElementByClassName('search__results__result__artwork'));
  }

  image = () => {
    const { search__results__result__artwork: size } = this.props.measurements;
    if (!size) {
      return false;
    }

    const { width } = size;
    const style = { width, height: width };
    return (
      <img
        style={style}
        role="presentation"
        src={this.props.artworkUrl.replace('100x100bb', `${width}x${width}bb`)}
      />
    );
  }

  render() {
    return (
      <div className="rt-fade-in search__results__result__artwork">
        {this.image()}
      </div>
    );
  }
}

TileArtwork.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  artworkUrl: React.PropTypes.string.isRequired,
  measurements: React.PropTypes.object,
};

export default connect(store => ({
  measurements: store.Browser.measurements,
}))(TileArtwork);
