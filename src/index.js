import React from 'react-native';
import withAltContext from 'alt/utils/withAltContext'

import Alt from './alt';
import App from './components/App';

const alt = new Alt();
React.AppRegistry.registerComponent('TestProject', () => withAltContext(alt)(App));