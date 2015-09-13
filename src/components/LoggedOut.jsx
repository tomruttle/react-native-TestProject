import React, { PropTypes, Component, View, Text } from 'react-native';

import NotificationsHome from './NotificationsHome';
import styles from '../ui/styles';

export default class LoggedOut extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

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
    if (state.notifications.length) {
      this.props.navigator.push({
        name: 'NotificationsHome',
        component: NotificationsHome,
        title: `Your Notifications (${state.notifications.length})`
      });
    }
  }

  render() {
    return (
      <View style={styles.loggedOutContainer}>
        <Text style={styles.loggedOutMessage}>Github Notifications!!!</Text>
        <Text style={styles.loggedOutSubMessage}>Log in to Github above to see them.</Text>
      </View>
    );
  }
}
