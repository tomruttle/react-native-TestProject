import React, { Component, Navigator } from 'react-native';

import LoggedOut from './LoggedOut';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'LoggedOut', component: LoggedOut}}
        configureScene={() => Navigator.SceneConfigs.FloatFromRight}
        renderScene={(route, navigator) => React.createElement(route.component, { navigator })}
      />
    );
  }
}
