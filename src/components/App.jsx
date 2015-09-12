import React, { PropTypes, Component, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default class TestProject extends Component {
  static contextTypes = {
    flux: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.context.flux.stores.testStore.listen((state) => {
      this.setState(state);
    });
  }

  onGo() {
    this.context.flux.actions.testActions.update();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Items: {this.state.items.map(item => <Text key={item}>{item}</Text>)}
        </Text>
        <View style={styles.flowRight}>
          <TouchableHighlight style={styles.button} onPress={() => this.onGo()}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  state = {
    items: []
  }
}
