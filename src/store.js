import sources from './sources';

export default class testStore {
  _init() {
    this.accessToken = null;
    this.user = {};
    this.isLoading = false;
    this.notifications = [];
  }

  constructor() {
    this.registerAsync(sources);
    this.bindActions(this.alt.actions.testActions);
    this.on('init', this._init);
  }

  onHandleError() {
    this.isLoading = false;
  }

  onResetStore() {
    this._init();
  }

  onIsLoading() {
    this.isLoading = true;
  }

  onReceivedToken(token) {
    this.accessToken = token;
    this.preventDefault(); // This shouldn't update the view, so don't emit an event.
  }

  onReceivedUser(res) {
    this.user = res.user;
    this.isLoading = res.isLoading;
  }

  onReceivedNotifications(res) {
    this.notifications = res.notifications;
    this.isLoading = res.isLoading;
  }
}
