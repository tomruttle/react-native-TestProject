import config from '../config/default.json';
import LinkingIOS from 'LinkingIOS';

const status = (res) => {
  if (res.status >= 200 && res.status < 300) { return res; }
  throw new Error(res.statusText ? res.statusText : res.message);
};

const clientId = config.oauth.github.id;
const clientSecret = config.oauth.github.secret;

export default (flux) => ({
  login: {
    remote() {
      const oauthState = Math.random() + '';
      return new Promise((resolve) => {
        const handleUrl = (event) => {
          resolve({ url: event.url, oauthState });
          LinkingIOS.removeEventListener('url', handleUrl);
        };
        LinkingIOS.openURL([
          'https://github.com/login/oauth/authorize',
          `?client_id=${clientId}`,
          `&state=${oauthState}`,
          '&redirect_uri=testproject://oauth',
          '&scope=notifications'
        ].join(''));
        LinkingIOS.addEventListener('url', handleUrl);
      });
    },
    local(state) { return state.code ? state.code : null; },
    loading: flux.actions.testActions.isLoading,
    success: flux.actions.testActions.receivedCode,
    error: flux.actions.testActions.handleError
  },

  getAccessToken: {
    remote(state, code, oauthState) {
      return fetch('https://github.com/login/oauth/access_token', {
        method: 'post',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: code,
          state: oauthState
        })
      }).then(status).then((res) => res.json());
    },
    local(state) { return state.accessToken ? state.accessToken : null; },
    loading: flux.actions.testActions.isLoading,
    success: flux.actions.testActions.receivedToken,
    error: flux.actions.testActions.handleError
  },

  getUser: {
    remote(state) {
      return fetch('https://api.github.com/user', {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `token ${state.accessToken}`
        }
      }).then(status).then((res) => res.json());
    },
    loading: flux.actions.testActions.isLoading,
    success: flux.actions.testActions.receivedUser,
    error: flux.actions.testActions.handleError
  },

  getNotifications: {
    remote(state) {
      return fetch('https://api.github.com/notifications', {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `token ${state.accessToken}`
        }
      }).then(status).then((res) => res.json());
    },
    loading: flux.actions.testActions.isLoading,
    success: flux.actions.testActions.receivedNotifications,
    error: flux.actions.testActions.handleError
  }

});
