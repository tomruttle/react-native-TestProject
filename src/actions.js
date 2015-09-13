export default class TestActions {
  constructor() {
    this.generateActions('resetStore');
  }

  receivedCode(code) {
    this.dispatch(code);
    this.alt.stores.testStore.getAccessToken();
  }

  receivedToken(token) {
    this.dispatch(token.access_token);
    this.alt.stores.testStore.getUser();
  }

  receivedUser(user) {
    this.dispatch(user);
  }

  handleError(err) {
    console.log('something went wrong...', err.toString());
  }
}
