import React, { PropTypes, Component, Text, View, ActivityIndicatorIOS, ListView } from 'react-native';

import Notification from './Notification';
import styles from '../ui/styles';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class NotificationsHome extends Component {
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
    const { notifications } = state;
    this.setState({ notifications: this.state.notifications.cloneWithRows(notifications) });
  }

  render() {
    const spinner = (this.state.isLoading)
      ? <ActivityIndicatorIOS hidden="true" size="large" />
      : <View />;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Your Notifications</Text>
        <ListView
          dataSource={this.state.notifications}
          renderRow={(rowData) => <Notification key={rowData.id} {...rowData} />}
        />
        {spinner}
      </View>
    );
  }

  state = {
    notifications: ds.cloneWithRows(this.context.flux.stores.testStore.getState().notifications)
  }
}
