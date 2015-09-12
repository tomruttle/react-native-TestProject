(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactNative = __webpack_require__(1);

	var _reactNative2 = _interopRequireDefault(_reactNative);

	var _componentsApp = __webpack_require__(62);

	var _componentsApp2 = _interopRequireDefault(_componentsApp);

	_reactNative2['default'].AppRegistry.registerComponent('TestProject', function () {
	  return _componentsApp2['default'];
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @flow
	 */
	'use strict';

	// Export React, plus some native additions.
	//
	// The use of Object.create/assign is to work around a Flow bug (#6560135).
	// Once that is fixed, change this back to
	//
	//   var ReactNative = {...require('React'), /* additions */}
	//
	var ReactNative = Object.assign(Object.create(__webpack_require__(2)), {
	  // Components
	  ActivityIndicatorIOS: __webpack_require__(3),
	  DatePickerIOS: __webpack_require__(4),
	  Image: __webpack_require__(5),
	  ListView: __webpack_require__(6),
	  MapView: __webpack_require__(7),
	  Modal: __webpack_require__(8),
	  Navigator: __webpack_require__(9),
	  NavigatorIOS: __webpack_require__(10),
	  PickerIOS: __webpack_require__(11),
	  ProgressViewIOS: __webpack_require__(12),
	  ScrollView: __webpack_require__(13),
	  SegmentedControlIOS: __webpack_require__(14),
	  SliderIOS: __webpack_require__(15),
	  SwitchIOS: __webpack_require__(16),
	  TabBarIOS: __webpack_require__(17),
	  Text: __webpack_require__(18),
	  TextInput: __webpack_require__(19),
	  TouchableHighlight: __webpack_require__(20),
	  TouchableOpacity: __webpack_require__(21),
	  TouchableWithoutFeedback: __webpack_require__(22),
	  View: __webpack_require__(23),
	  WebView: __webpack_require__(24),

	  // APIs
	  ActionSheetIOS: __webpack_require__(25),
	  AdSupportIOS: __webpack_require__(26),
	  AlertIOS: __webpack_require__(27),
	  Animated: __webpack_require__(28),
	  AppRegistry: __webpack_require__(29),
	  AppStateIOS: __webpack_require__(30),
	  AsyncStorage: __webpack_require__(31),
	  CameraRoll: __webpack_require__(32),
	  Dimensions: __webpack_require__(33),
	  Easing: __webpack_require__(34),
	  ImagePickerIOS: __webpack_require__(35),
	  InteractionManager: __webpack_require__(36),
	  LayoutAnimation: __webpack_require__(37),
	  LinkingIOS: __webpack_require__(38),
	  NetInfo: __webpack_require__(39),
	  PanResponder: __webpack_require__(40),
	  PixelRatio: __webpack_require__(41),
	  PushNotificationIOS: __webpack_require__(42),
	  Settings: __webpack_require__(43),
	  StatusBarIOS: __webpack_require__(44),
	  StyleSheet: __webpack_require__(45),
	  VibrationIOS: __webpack_require__(46),

	  // Plugins
	  DeviceEventEmitter: __webpack_require__(47),
	  NativeAppEventEmitter: __webpack_require__(48),
	  NativeModules: __webpack_require__(49),
	  Platform: __webpack_require__(50),
	  requireNativeComponent: __webpack_require__(51),

	  // Prop Types
	  EdgeInsetsPropType: __webpack_require__(52),
	  PointPropType: __webpack_require__(53),

	  addons: {
	    LinkedStateMixin: __webpack_require__(54),
	    Perf: undefined,
	    PureRenderMixin: __webpack_require__(55),
	    TestModule: __webpack_require__(49).TestModule,
	    TestUtils: undefined,
	    batchedUpdates: __webpack_require__(56).batchedUpdates,
	    cloneWithProps: __webpack_require__(57),
	    createFragment: __webpack_require__(58).create,
	    update: __webpack_require__(59),
	  },
	});

	if (__DEV__) {
	  ReactNative.addons.Perf = __webpack_require__(60);
	  ReactNative.addons.TestUtils = __webpack_require__(61);
	}

	module.exports = ReactNative;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("React");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("ActivityIndicatorIOS");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("DatePickerIOS");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("Image");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("ListView");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("MapView");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("Modal");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("Navigator");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("NavigatorIOS");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("PickerIOS");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("ProgressViewIOS");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("ScrollView");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("SegmentedControlIOS");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("SliderIOS");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("SwitchIOS");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("TabBarIOS");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("Text");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("TextInput");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("TouchableHighlight");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("TouchableOpacity");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("TouchableWithoutFeedback");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("View");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("WebView");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("ActionSheetIOS");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("AdSupportIOS");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("AlertIOS");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("Animated");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("AppRegistry");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("AppStateIOS");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("AsyncStorage");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("CameraRoll");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("Dimensions");

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("Easing");

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("ImagePickerIOS");

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("InteractionManager");

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("LayoutAnimation");

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = require("LinkingIOS");

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("NetInfo");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("PanResponder");

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("PixelRatio");

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("PushNotificationIOS");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("Settings");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("StatusBarIOS");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("StyleSheet");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("VibrationIOS");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("RCTDeviceEventEmitter");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("RCTNativeAppEventEmitter");

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = require("NativeModules");

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = require("Platform");

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("requireNativeComponent");

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("EdgeInsetsPropType");

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("PointPropType");

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("LinkedStateMixin");

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("ReactComponentWithPureRenderMixin");

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = require("ReactUpdates");

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("cloneWithProps");

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("ReactFragment");

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = require("update");

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("ReactDefaultPerf");

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = require("ReactTestUtils");

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _reactNative = __webpack_require__(1);

	var _reactNative2 = _interopRequireDefault(_reactNative);

	var styles = _reactNative.StyleSheet.create({
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
	  instructions: {
	    textAlign: 'center',
	    color: '#333333',
	    marginBottom: 5
	  }
	});

	var TestProject = (function (_Component) {
	  _inherits(TestProject, _Component);

	  function TestProject(props, context) {
	    _classCallCheck(this, TestProject);

	    _get(Object.getPrototypeOf(TestProject.prototype), 'constructor', this).call(this, props, context);
	  }

	  _createClass(TestProject, [{
	    key: 'render',
	    value: function render() {
	      return _reactNative2['default'].createElement(
	        _reactNative.View,
	        { style: styles.container },
	        _reactNative2['default'].createElement(
	          _reactNative.Text,
	          { style: styles.welcome },
	          'Welcome to React Native!!?'
	        ),
	        _reactNative2['default'].createElement(
	          _reactNative.Text,
	          { style: styles.instructions },
	          'To get started, edit index.ios.js'
	        ),
	        _reactNative2['default'].createElement(
	          _reactNative.Text,
	          { style: styles.instructions },
	          'Press Cmd+R to reload,',
	          '\n',
	          'Cmd+D or shake for dev menu'
	        )
	      );
	    }
	  }]);

	  return TestProject;
	})(_reactNative.Component);

	exports['default'] = TestProject;
	module.exports = exports['default'];

/***/ }
/******/ ])));