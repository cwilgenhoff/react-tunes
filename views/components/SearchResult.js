import React from 'react';
import { connect } from 'react-redux';
import {
  addEventListener,
  removeEventListener,
  measureRenderedElementByClassName,
} from '../actions/Browser';

class SearchResult extends React.Component {
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

  artwork = () => {
    const { search__results__result__artwork: size } = this.props.measurements;
    if (!size) {
      return (
        <div className="search__results__result__artwork">Loading...</div>
      );
    }

    const { width } = size;
    const style = { width, height: width };
    return (
      <div className="search__results__result__artwork">
        <img
          style={style}
          src={this.props.artworkUrl100.replace('100x100bb', `${width}x${width}bb`)}
          alt={this.props.artistName}
        />
      </div>
    );
  }

  album = () => {
    if (!this.props.collectionName) {
      return false;
    }

    return (
      <span className="search__results__result__album">
        {this.props.collectionName}
      </span>
    );
  }

  song = () => {
    if (!this.props.trackName) {
      return false;
    }

    return (
      <span className="search__results__result__song">
        {this.props.trackName}
      </span>
    );
  }

  artist = () => {
    return (
      <span className="search__results__result__artist">
        {this.props.artistName.toUpperCase()}
      </span>
    );
  }

  isAlbum = () => Boolean(this.props.collectionName && !this.props.trackName);

  isSong = () => Boolean(this.props.collectionName && this.props.trackName);

  tags = () => {
    if (this.isAlbum()) {
      return (
        <span className="search__results__result__tags_tag search__results__result__tags__tag--album">
          ALBUM
        </span>
      );
    }

    if (this.isSong()) {
      return (
        <span className="search__results__result__tags_tag search__results__result__tags__tag--song">
          SONG
        </span>
      );
    }

    return false;
  }

  render() {
    return (
      <div className="col-xs-3 search__results__result">
        {this.artwork()}
        <div className="search__results__result__description">
          {this.artist()}
          {this.album()}
          {this.song()}
          <div className="search__results__result__tags">
            {this.tags()}
          </div>
        </div>
      </div>
    );
  }
}

SearchResult.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  artistName: React.PropTypes.string.isRequired,
  artworkUrl100: React.PropTypes.string.isRequired,
  measurements: React.PropTypes.object,
  trackName: React.PropTypes.string,
  collectionName: React.PropTypes.string,
};

export default connect((store) => {
  return {
    measurements: store.Browser.measurements,
  };
})(SearchResult);
