import reqwest from 'reqwest';

class ApiClient {
  constructor() {
    this.searchEndpoint = 'https://itunes.apple.com/search';
    this.lookUpEndpoint = 'https://itunes.apple.com/lookup';
    this.searchLimit = 200;
  }

  search({ media, entity, term }) {
    return reqwest({
      url: `${this.searchEndpoint}?media=${media}&entity=${entity}&term=${term.replace(' ', '+')}&limit=${this.searchLimit}`,
      type: 'jsonp',
    });
  }

  lookUp({ id, entity }) {
    return reqwest({
      url: `${this.lookUpEndpoint}?id=${id}&entity=${entity}&limit=${this.searchLimit}`,
      type: 'jsonp',
    });
  }
}

export default new ApiClient();
