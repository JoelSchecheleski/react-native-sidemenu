/**
 * @flow
 */

import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './app/reducers';
import ReduxNavigation from './app/Navigation/ReduxNavigation'
import { bgStatusBar, bgHeader } from './app/styles';

const store = createStore(rootReducer);

const ReduxExampleApp = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <StatusBar
      translucent
      backgroundColor={bgStatusBar}
      animated
      />
      <ReduxNavigation />
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default ReduxExampleApp;
