import React from 'react';

import ENTITIES from '../constants/Entities';
import MEDIA from '../constants/Media';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      entity: ENTITIES.SONG, // TODO: Make configurable
      media: MEDIA.MUSIC,
    };
  }

  handleSearchTermChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  }

  search = (event) => {
    if (event.preventDefault) {
      event.preventDefault();
    }

    this.props.onSearch(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.search} className="search__form">
          <div className="form-group">
            <input
              id="searchTerm"
              name="search[term]"
              type="text"
              className="fw fd-input email-session__input"
              placeholder=""
              onChange={this.handleSearchTermChange}
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              name="commit"
              id="search-form-submit"
              className="fw fd-btn-success"
            >
              Search!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  onSearch: React.PropTypes.func.isRequired,
};

export default SearchForm;
