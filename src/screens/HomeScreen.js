import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  Button,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import { Sentry, SentrySeverity } from 'react-native-sentry';
import Config from 'react-native-config';

import Info from '../components/Info';

import { GREETINGS_SCENE_NAME } from '../screens/GreetingsScreen';
import { JSX_SCENE_NAME } from '../screens/JsxScreen';
import { STATE_SCENE_NAME } from '../screens/StateScreen';

Sentry.config('https://1254c1c9a05f443db1f9a44457fdd6f2:8605db276da7457aa4d927752782df0c@sentry.io/189650').install();

Sentry.setTagsContext({
  environment: 'production',
  react: true,
});

Sentry.setUserContext({
  email: 'nhodicq@bewizyu.com',
  userID: '12341',
  username: 'nhodicq',
  extra: {
    isAdmin: false,
  },
});

export const HOME_SCENE_NAME = 'HOME_SCENE';

const styles = StyleSheet.create({
  margin: {
    marginTop: 10,
  },
});

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.navigate = this.props.navigation.navigate;

    this.navigateToGreetings = this.navigateToGreetings.bind(this);
    this.navigateToJsx = this.navigateToJsx.bind(this);
    this.navigateToState = this.navigateToState.bind(this);
  }

  componentDidMount() {
    Alert.alert(Config.API_URL);
  }

  navigateToGreetings() {
    Sentry.captureMessage('NavigateToGreetings', {
      level: SentrySeverity.Info,
    });
    this.navigate(GREETINGS_SCENE_NAME);
  }

  navigateToJsx() {
    Sentry.captureMessage('NavigateToJsx', {
      level: SentrySeverity.Info,
    });
    this.navigate(JSX_SCENE_NAME);
  }

  navigateToState() {
    Sentry.captureMessage('NavigateToState', {
      level: SentrySeverity.Info,
    });
    this.navigate(STATE_SCENE_NAME);
  }

  render() {
    return (
      <ScrollView>
        <Info />
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToGreetings}
            title="Greetings"
          />
        </View>

        <View style={styles.margin}>
          <Button
            onPress={this.navigateToJsx}
            title="Jsx"
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToState}
            title="State"
          />
        </View>

        <View style={styles.margin}>
          <Button
            onPress={() => {
              Sentry.nativeCrash();
            }}
            title="Native Crash"
          />
        </View>

        <View style={styles.margin}>
          <Button
            onPress={() => {
              throw new Error('Error Sentry test');
            }}
            title="Throw error"
          />
        </View>
      </ScrollView>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.any.isRequired,
  }).isRequired,
};
