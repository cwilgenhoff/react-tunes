import reqwest from 'reqwest';

class ApiClient {
  constructor() {
    this.searchEndpoint = 'https://itunes.apple.com/search';
    this.searchLimit = 10;
  }

  search({ media, entity, term }) {
    return reqwest({
      url: `${this.searchEndpoint}?media=${media}&entity=${entity}&term=${term}&limit=${this.searchLimit}`,
      type: 'jsonp',
    });
  }
}

export default new ApiClient();
