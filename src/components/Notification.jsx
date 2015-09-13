import React, { PropTypes, Component, Text, View } from 'react-native';
import moment from 'moment';

import styles from '../ui/styles';

export default class Notification extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    repository: PropTypes.shape({
      name: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string
      })
    }).isRequired,
    subject: PropTypes.shape({
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={styles.notification}>
        <Text>Title: {this.props.subject.title}</Text>
        <Text>Type: {this.props.subject.type}</Text>
        <Text>Repo: {this.props.repository.name} (owned by {this.props.repository.owner.login})</Text>
        <Text>Updated: {moment.duration(moment() - moment(this.props.updated_at)).humanize()} ago</Text>
      </View>
    );
  }
}
