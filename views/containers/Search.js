import React from 'react';
import { connect } from 'react-redux';

import SearchForm from '../components/SearchForm';
import { search } from '../actions/Search';

class Search extends React.Component {
  onSearch = (params) => {
    this.props.dispatch(search(params));
  }

  render() {
    return (
      <div>
        <SearchForm onSearch={this.onSearch} />
      </div>
    );
  }
}

Search.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(Search);
