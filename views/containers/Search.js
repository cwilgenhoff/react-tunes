import React from 'react';
import { connect } from 'react-redux';

import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import { search } from '../actions/Search';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      perPage: 10,
    };
  }
  onSearch = params => this.props.dispatch(search(params));

  page = () => {
    const { results } = this.props;
    const { page, perPage } = this.state;
    return results.slice(0, (page * perPage) + perPage);
  }

  onShowMore = () => {
    this.setState({
      page: this.state.page + 1,
    });
  }

  render() {
    return (
      <div className="search">
        <div className="container-fluid">
          <SearchForm
            isSearching={this.props.isSearching}
            onSearch={this.onSearch}
          />
          <SearchResults
            results={this.page()}
            onShowMore={this.onShowMore}
            info={this.props.info}
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
  info: React.PropTypes.string,
};

export default connect(store => ({
  results: store.Search.results,
  info: store.Search.info,
  isSearching: store.Search.isSearching,
}))(Search);
