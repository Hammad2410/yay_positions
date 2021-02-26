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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import CandidateTab from './src/Tab/CandidateTab';
import EmployerTab from './src/Tab/EmployerTab';


const App = () => {
  return (
    <NavigationContainer>
     <EmployerTab/>
    </NavigationContainer>

  );
};



export default App;
