import React from 'react';
import { connect } from 'react-redux';

import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import FavouritesHelper from '../helpers/Favourites';
import { search } from '../actions/Search';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      perPage: 10,
      totalPages: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.results.length !== this.props.results.length) {
      this.setState({
        totalPages: Math.floor(nextProps.results.length / this.state.perPage),
      });
    }
  }

  onSearch = (params) => {
    this.props.dispatch(search(params));
    this.setState({ page: 0 });
  }

  onShowMore = () => {
    if (this.state.page < this.state.totalPages) {
      this.setState({
        page: this.state.page + 1,
      });
    }
  }

  resultsForCurrentPage = () => {
    const { results } = this.props;
    const { page, perPage } = this.state;
    return results.slice(0, (page * perPage) + perPage);
  }

  welcomeMessage = () => {
    if (this.props.hasSearched) {
      return false;
    }

    return (
      <p className="search__message">
        Welcome! Please, feel free to search about your favourite artist, album or song.
      </p>
    );
  }

  render() {
    return (
      <div className="search">
        <div className="container-fluid">
          <SearchForm
            isSearching={this.props.isSearching}
            onSearch={this.onSearch}
          />
          {this.welcomeMessage()}
          <SearchResults
            results={this.resultsForCurrentPage()}
            onShowMore={this.onShowMore}
            hasSearched={this.props.hasSearched}
            isSearching={this.props.isSearching}
            resultsMessage={this.props.resultsMessage}
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  results: React.PropTypes.array.isRequired,
  isSearching: React.PropTypes.bool.isRequired,
  hasSearched: React.PropTypes.bool.isRequired,
  resultsMessage: React.PropTypes.string,
};

export default connect((store) => {
  const favouritesHelper = new FavouritesHelper(store.Favourites);
  return {
    results: favouritesHelper.sort(store.Search.results),
    hasSearched: store.Search.hasSearched,
    isSearching: store.Search.isSearching,
    resultsMessage: store.Search.resultsMessage,
  };
}
)(Search);
