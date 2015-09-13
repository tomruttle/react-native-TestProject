import React, {
  PropTypes,
  Component,
  Navigator,
  View,
  Text,
  Image,
  ActivityIndicatorIOS,
  TouchableOpacity
} from 'react-native';

import LoggedOut from './LoggedOut';
import styles from '../ui/styles';

export default class App extends Component {
  static contextTypes = {
    flux: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.context.flux.stores.testStore.listen(this.onStoreChange);
  }

  componentWillUnmount() {
    this.context.flux.stores.testStore.unlisten(this.onStoreChange);
  }

  onStoreChange = (state) => {
    const { isLoading, user } = state;
    this.setState({ isLoading, user });
  }

  render() {
    const NavigationBarRouteMapper = {
      Title: (route) => {
        return (this.state.isLoading)
          ? <ActivityIndicatorIOS style={styles.navBarLoading} hidden="true" size="small" />
          : <Text style={[styles.navBarText, styles.navBarTitleText]}>{route.title}</Text>;
      },
      LeftButton: () => { return null; },
      RightButton: () => {
        if (this.state.user && this.state.user.avatar_url) {
          return (
            <Image
              source={{ uri: this.state.user.avatar_url }}
              style={styles.toolbarAvatar}
            />
          );
        }
        return (
          <TouchableOpacity
            onPress={this.context.flux.stores.testStore.login}
            style={styles.navBarRightButton}>
            <Text style={[styles.navBarText, styles.navBarButtonText]}>
              Log In
            </Text>
          </TouchableOpacity>
        );
      }
    };

    return (
      <Navigator
        initialRoute={{ name: 'LoggedOut', component: LoggedOut, title: '' }}
        navigationBar={(
          <Navigator.NavigationBar
            style={styles.navBar}
            routeMapper={NavigationBarRouteMapper}
          />
        )}
        configureScene={() => Navigator.SceneConfigs.FloatFromRight}
        renderScene={(route, navigator) => (
          <View style={styles.container}>
            <route.component navigator={navigator} route={route} />
          </View>
        )}
      />
    );
  }

  state = {
    isLoading: false,
    user: {}
  }
}
