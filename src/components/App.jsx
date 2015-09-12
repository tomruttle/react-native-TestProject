import React, { PropTypes, Component, Text, View, TouchableHighlight, ActivityIndicatorIOS } from 'react-native';
import styles from '../ui/styles';

const _userExists = (user) => (user && Object.keys(user).length > 0);

export default class TestProject extends Component {
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

  onLoginPress() {
    this.context.flux.actions.testActions.login(this.state.accessToken);
    this.setState({ isLoading: true });
  }

  onStoreChange = (state) => {
    if (_userExists(state.user)) {
      this.setState({ user: state.user, isLoading: false });
    }
  }

  render() {
    const spinner = (this.state.isLoading)
      ? <ActivityIndicatorIOS hidden="true" size="large" />
      : <View />;

    const button = (this.state.isLoading || _userExists(this.state.user))
      ? <View />
      : (<View style={styles.flowRight}>
          <TouchableHighlight style={styles.button} onPress={this.onLoginPress.bind(this)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {(this.state.user.name)
            ? `You are logged in as: ${this.state.user.name}`
            : 'You are not logged in. :('}
        </Text>
        {button}
        {spinner}
      </View>
    );
  }

  state = {
    user: {},
    isLoading: false
  }
}
