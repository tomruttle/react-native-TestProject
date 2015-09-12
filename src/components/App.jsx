import React, { PropTypes, Component, Text, View, TouchableHighlight, ActivityIndicatorIOS } from 'react-native';
import styles from '../ui/styles';

export default class TestProject extends Component {
  static contextTypes = {
    flux: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.context.flux.stores.testStore.listen(this.setState.bind(this));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.code !== this.state.code) {
      this.context.flux.actions.testActions.getAuthToken(nextState.code);
      return false;
    }

    if (nextState.accessToken !== this.state.accessToken) {
      this.context.flux.actions.testActions.getUser(nextState.accessToken);
      return false;
    }

    return true;
  }

  componentWillUnmount() {
    this.context.flux.stores.testStore.unlisten(this.setState);
  }

  onGo() {
    if (!this.state.accessToken) {
      this.context.flux.actions.testActions.login();
      return;
    }

    this.context.flux.actions.testActions.getUser(this.state.accessToken);
  }

  render() {
    const spinner = (this.state.isLoading)
      ? <ActivityIndicatorIOS hidden="true" size="large" />
      : <View />;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {(this.state.user.name)
            ? `You are logged in as: ${this.state.user.name}`
            : 'You are not logged in. :('}
        </Text>
        <View style={styles.flowRight}>
          <TouchableHighlight style={styles.button} onPress={this.onGo.bind(this)}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        {spinner}
      </View>
    );
  }

  state = {
    code: null,
    accessToken: null,
    user: {},
    isLoading: false
  }
}
