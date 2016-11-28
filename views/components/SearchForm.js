import React from 'react';

import ENTITIES from '../constants/Entities';
import MEDIA from '../constants/Media';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      entity: ENTITIES.SONG,
      media: MEDIA.MUSIC,
    };
  }

  handleSearchTermChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  }

  handleSearchEntityChange = (event) => {
    this.setState({
      entity: event.target.value,
    });
  }

  search = (event) => {
    if (event.preventDefault) {
      event.preventDefault();
    }

    this.props.onSearch(this.state);
  }

  entities = () => {
    return _.keys(ENTITIES).map(entity =>
      <option
        key={entity}
        value={ENTITIES[entity]}
      >
        {_.capitalize(entity)}
      </option>
    );
  }

  render() {
    return (
      <form onSubmit={this.search} className="search__form">
        <div className="form-group">
          <input
            id="searchTerm"
            name="search[term]"
            type="text"
            className="search__form__input"
            placeholder=""
            onChange={this.handleSearchTermChange}
          />
        </div>

        <div className="form-group">
          <select
            id="searchEntity"
            name="search[entity]"
            className="search__form__input"
            onChange={this.handleSearchEntityChange}
            value={this.state.entity}
          >
            { this.entities() }
          </select>
        </div>

        <div className="form-group">
          <button
            type="submit"
            name="commit"
            id="search-form-submit"
            className="search__form__button"
          >
            Search
          </button>
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearch: React.PropTypes.func.isRequired,
};

export default SearchForm;
