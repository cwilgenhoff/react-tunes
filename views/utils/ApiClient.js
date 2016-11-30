import reqwest from 'reqwest';

class ApiClient {
  constructor() {
    this.searchEndpoint = 'https://itunes.apple.com/search';
    this.searchLimit = 200;
  }

  static query = ({ media, entity, attribute, term }) => {
    return `?media=${media}&term=${term.replace(' ', '+')}${entity ? `&entity=${entity}` : ''}${entity ? `&attribute=${attribute}` : ''}`;
  }

  search(params) {
    return reqwest({
      url: `${this.searchEndpoint}${ApiClient.query(params)}&limit=${this.searchLimit}`,
      type: 'jsonp',
    });
  }
}

export default new ApiClient();
