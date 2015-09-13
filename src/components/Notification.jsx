import React, { PropTypes, Component, Text, View } from 'react-native';
import moment from 'moment';
// import Icon from 'react-native-vector-icons/Octicons';

import styles from '../ui/styles';

export default class Notification extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    repository: PropTypes.shape({
      name: PropTypes.string.isRequired
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
    const updatedTime = moment.duration(moment() - moment(this.props.updated_at)).humanize();
    return (
      <View style={styles.notification}>
        <Text style={styles.notTimestamp}>From {updatedTime} ago, in the <Text style={styles.boldText}>{this.props.repository.name}</Text> repo comes:</Text>
        <Text style={styles.notTitle}>{this.props.subject.title}</Text>
        <Text>Type: {this.props.subject.type}</Text>
      </View>
    );
  }
}
