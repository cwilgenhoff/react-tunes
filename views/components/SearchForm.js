import React from 'react';

import ATTRIBUTES from '../constants/Attributes';
import MEDIA from '../constants/Media';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      attribute: ATTRIBUTES.ARTIST,
      media: MEDIA.MUSIC,
    };
  }

  handleSearchTermChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  }

  handleSearchAttributeChange = (event) => {
    this.setState({
      attribute: event.target.value,
    });
  }

  search = (event) => {
    if (event.preventDefault) {
      event.preventDefault();
    }

    this.props.onSearch(this.state);
  }

  attributes = () => {
    return _.keys(ATTRIBUTES).map(attribute =>
      <option
        key={attribute}
        value={ATTRIBUTES[attribute]}
      >
        {attribute.toUpperCase()}
      </option>
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <form onSubmit={this.search} className="search__form">
            <div className="search__form__group">
              <input
                id="searchTerm"
                name="search[term]"
                type="text"
                className="search__form__input"
                placeholder="Search artist, album or songs..."
                onChange={this.handleSearchTermChange}
                required
              />
            </div>

            <div className="search__form__group">
              <div className="search__form__select">
                <select
                  id="searchEntity"
                  name="search[entity]"
                  onChange={this.handleSearchAttributeChange}
                  value={this.state.attribute}
                >
                  { this.attributes() }
                </select>
              </div>
            </div>

            <div className="search__form__group">
              <button
                type="submit"
                name="commit"
                id="search-form-submit"
                className="rt-button search__form__button"
              >
                { this.props.isSearching ? 'SEARCHING...' : 'SEARCH' }
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  onSearch: React.PropTypes.func.isRequired,
  isSearching: React.PropTypes.bool.isRequired,
};

export default SearchForm;
