export default class testStore {
  _init() {
    this.code = null;
    this.accessToken = null;
    this.user = {};
  }

  constructor() {
    this.bindActions(this.alt.actions.testActions);
    this.on('init', this._init);
  }

  onLogin(code) {
    this.code = code;
  }

  onGetAuthToken(token) {
    this.accessToken = token;
  }

  onGetUser(user) {
    this.user = user;
  }
}
