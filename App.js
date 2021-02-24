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
import Welcome from './src/Screens/Welcome';
import Register from './src/Screens/Register'
import Login from './src/Screens/Login'

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome}
          options={({ navigation }) => ({ header: (props) => null })}
        />
            <Stack.Screen name="Register" component={Register}
          options={({ navigation }) => ({ header: (props) => null })}
        />
           <Stack.Screen name="Login" component={Login}
          options={({ navigation }) => ({ header: (props) => null })}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};



export default App;
