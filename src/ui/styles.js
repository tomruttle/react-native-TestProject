import { StyleSheet, PixelRatio } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    backgroundColor: '#EAEAEA'
  },
  boldText: {
    fontWeight: '500',
    color: '#222'
  },
  notification: {
    backgroundColor: '#FFF',
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#222'
  },
  notTitle: {
    color: '#222',
    fontWeight: '500',
    fontSize: 17,
    marginVertical: 5
  },
  notAvatar: {
    width: 30,
    height: 30,
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 15
  },
  notTimestamp: {
    fontSize: 12,
    opacity: 0.7
  },
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD'
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500'
  },
  navBar: {
    backgroundColor: 'white'
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10
  },
  navBarTitleText: {
    color: '#222',
    fontWeight: '500',
    marginVertical: 9
  },
  navBarLoading: {
    marginVertical: 9
  },
  navBarLeftButton: {
    paddingLeft: 10
  },
  navBarRightButton: {
    paddingRight: 10
  },
  navBarButtonText: {
    color: '#4e84b1'
  },
  toolbarAvatar: {
    width: 30,
    height: 30,
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 15
  },
  loggedOutContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loggedOutMessage: {
    fontSize: 20,
    fontFamily: 'Avenir-Medium',
    alignSelf: 'center',
    marginTop: -80
  },
  loggedOutSubMessage: {
    fontSize: 14,
    opacity: 0.7
  }
});
