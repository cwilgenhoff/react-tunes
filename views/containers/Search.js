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

  page = () => this.props.results.slice(
    0, (this.state.page * this.state.perPage) + this.state.perPage
  );

  showMore = () => this.setState({
    page: this.state.page + 1,
  })

  render() {
    return (
      <div>
        <SearchForm onSearch={this.onSearch} />
        <SearchResults results={this.page()} />
        <button onClick={this.showMore}>showMore -></button>
      </div>
    );
  }
}

Search.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  results: React.PropTypes.array.isRequired,
};

export default connect(store => ({
  results: store.Search.results,
}))(Search);
