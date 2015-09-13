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

  onResetStore() {
    this._init();
  }

  onReceivedCode(code) {
    this.code = code;
    this.preventDefault();
  }

  onReceivedToken(token) {
    this.accessToken = token;
    this.preventDefault();
  }

  onReceivedUser(user) {
    this.user = user;
  }
}
