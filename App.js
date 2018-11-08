
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import Routes from './Routes';

export default class App extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#fff"
          barStyle="dark-content"
        />
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
}); 