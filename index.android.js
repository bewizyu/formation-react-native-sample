import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import NavigationContainer from './src/NavigationContainer';

import { Sentry } from 'react-native-sentry';

Sentry.config("https://1254c1c9a05f443db1f9a44457fdd6f2:8605db276da7457aa4d927752782df0c@sentry.io/189650").install();


export default class ReactNativeSample extends Component {
  render() {
    return (
      <NavigationContainer />
    );
  }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
