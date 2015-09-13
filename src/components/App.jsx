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
    this.context.flux.stores.testStore.login();
  }

  onLogoutPress() {
    this.context.flux.actions.testActions.resetStore();
  }

  onStoreChange = (state) => {
    this.setState({ user: state.user, isLoading: state.isLoading });
  }

  render() {
    const spinner = (this.state.isLoading)
      ? <ActivityIndicatorIOS hidden="true" size="large" />
      : <View />;

    const text = (this.state.user.name)
      ? <Text style={styles.welcome}>You are logged in as: {this.state.user.name}</Text>
      : <View />;

    let button;

    if (this.state.isLoading) {
      button = <View />;
    } else if (_userExists(this.state.user)) {
      button = (<View style={styles.flowRight}>
        <TouchableHighlight style={styles.button} onPress={this.onLogoutPress.bind(this)}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableHighlight>
      </View>);
    } else {
      button = (<View style={styles.flowRight}>
        <TouchableHighlight style={styles.button} onPress={this.onLoginPress.bind(this)}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>
      </View>);
    }

    return (
      <View style={styles.container}>
        {text}
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
