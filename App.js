/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PermissionsAndroid,
} from 'react-native';

import {Provider} from 'react-redux';
import Navigator from './src/Navigator';
import configureStore from './src/redux/createStore';

const App = () => {
  const permission = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      PermissionsAndroid.PERMISSIONS.MODIFY_AUDIO_SETTINGS,
      PermissionsAndroid.PERMISSIONS.FOREGROUND_SERVICE,
      PermissionsAndroid.PERMISSIONS.MICROPHONE,
    );
  };

  useEffect(() => {
    permission();
  }, []);

  useEffect(() => {
    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
    // PermissionsAndroid.check(
    //   PermissionsAndroid.PERMISSIONS.MODIFY_AUDIO_SETTINGS,
    // )
    //   .then((response) => {
    //     console.log(response);
    //     getdata();
    //   })
    //   .catch((error) => console.warn(error));
  });
  const store = configureStore();
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
