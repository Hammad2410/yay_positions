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
import SavedJobs from './src/Screens/SavedJobs'
import PersonalInfo from './src/Screens/PersonalInfo'

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PersonalInfo">
        <Stack.Screen name="Welcome" component={Welcome}
          options={({ navigation }) => ({ header: (props) => null })}
        />
            <Stack.Screen name="Register" component={Register}
          options={({ navigation }) => ({ header: (props) => null })}
        />
           <Stack.Screen name="Login" component={Login}
          options={({ navigation }) => ({ header: (props) => null })}
        />
         <Stack.Screen name="SavedJobs" component={SavedJobs}
          options={({ navigation }) => ({ header: (props) => null })}
        />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo}
          options={({ navigation }) => ({ header: (props) => null })}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};



export default App;
