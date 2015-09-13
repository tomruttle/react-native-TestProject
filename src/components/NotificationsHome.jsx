import React, { PropTypes, Component, ListView } from 'react-native';

import Notification from './Notification';

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
    return (
      <ListView
        dataSource={this.state.notifications}
        renderRow={(rowData) => <Notification key={rowData.id} {...rowData} />}
      />
    );
  }

  state = {
    notifications: ds.cloneWithRows(this.context.flux.stores.testStore.getState().notifications)
  }
}
