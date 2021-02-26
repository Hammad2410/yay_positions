/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Provider } from "react-redux"
import Navigator from './src/Navigator'
import configureStore from './src/redux/createStore'

const App = () => {
  const store = configureStore()
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
