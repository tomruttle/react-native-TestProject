import sources from './sources';

export default class testStore {
  _init() {
    this.code = null;
    this.accessToken = null;
    this.user = {};
  }

  constructor() {
    this.registerAsync(sources);
    this.bindActions(this.alt.actions.testActions);
    this.on('init', this._init);
  }

  onReceivedCode(code) {
    this.code = code;
  }

  onReceivedToken(token) {
    this.accessToken = token;
  }

  onReceivedUser(user) {
    this.user = user;
  }
}
