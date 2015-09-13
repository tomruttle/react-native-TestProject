import React, { PropTypes, Component, Text, View } from 'react-native';

export default class Notification extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
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
      <View>
        <Text>Title: {this.props.subject.title}, Type: {this.props.subject.type}</Text>
      </View>
    );
  }
}
