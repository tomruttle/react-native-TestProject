export default class TestActions {
  constructor() {
    this.generateActions('resetStore', 'isLoading');
  }

  handleError(err) {
    console.log('something went wrong...', err.toString());
    this.dispatch();
  }

  receivedCode(res) {
    const [, oauthState] = res.url.match(/state=(.*)$/);
    if (oauthState !== res.oauthState) {
      this.actions.handleError(new Error('Invalid state returned!'));
      return;
    }

    const [, code] = res.url.match(/code=(.*)&/);
    this.alt.stores.testStore.getAccessToken(code, oauthState);
  }

  receivedToken(token) {
    this.dispatch(token.access_token);
    this.alt.stores.testStore.getUser();
  }

  receivedUser(user) {
    this.dispatch({ user, isLoading: false });
    this.alt.stores.testStore.getNotifications();
  }

  receivedNotifications(notifications) {
    this.dispatch({ notifications, isLoading: false });
  }
}
