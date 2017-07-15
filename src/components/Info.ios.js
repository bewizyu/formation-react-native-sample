import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BACKGROUND_COLOR = '#F5FCFF';
const INSTRUCTION_COLOR = '#333333';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: INSTRUCTION_COLOR,
    marginBottom: 5,
  },
});

export default function Info() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
      <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
    </View>
  );
}
