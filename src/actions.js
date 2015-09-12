import config from '../config/default.json';
import LinkingIOS from 'LinkingIOS';

const status = (res) => {
  if (res.status >= 200 && res.status < 300) { return res; }
  throw new Error(res.statusText);
};

const clientId = config.oauth.github.id;
const clientSecret = config.oauth.github.secret;

export default class TestActions {
  login() {
    const state = this.alt.stores.testStore.getState();
    if (state.user && Object.keys(state.user).length) {
      return;
    }
    if (state.accessToken) {
      this.actions.getUser(state.accessToken);
      return;
    }
    if (state.code) {
      this.actions.getAuthToken(state.code);
      return;
    }

    const handleUrl = (event) => {
      const [, code] = event.url.match(/code=(.*)$/);
      this.dispatch(code);
      this.actions.getAuthToken(code);
      LinkingIOS.removeEventListener('url', handleUrl);
    };
    LinkingIOS.openURL(`https://github.com/login/oauth/authorize?client_id=${clientId}`);
    LinkingIOS.addEventListener('url', handleUrl);
  }

  getAuthToken(code) {
    fetch('https://github.com/login/oauth/access_token', {
      method: 'post',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code: code })
    })
    .then(status)
    .then((res) => res.json())
    .then((json) => {
      this.dispatch(json.access_token);
      this.actions.getUser(json.access_token);
    })
    .catch((err) => { console.log('request failed', err); });
  }

  getUser(token) {
    fetch('https://api.github.com/user', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `token ${token}`
      }
    })
    .then(status)
    .then((res) => res.json())
    .then((json) => this.dispatch(json))
    .catch((err) => { console.log('unable to get user', err.toString()); });
  }
}
