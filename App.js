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
import Candidate from './src/Screens/Candidate'
import BrowseJobs from './src/Screens/BrowseJobs'
import Filter from './src/Screens/Filter'
import Applyjob from './src/Screens/Applyjob'
import Invitations from './src/Screens/Invitations'
import BrowseCandidates from './src/Screens/BrowseCandidates'
import Favorite from './src/Screens/Favorite'
import Hired from './src/Screens/Hired'
import Invitationentries from './src/Screens/Invitationentries'
import Jobs from './src/Screens/Jobs'
import Employer from './src/Screens/Employer'
import MyProfile from './src/Screens/MyProfile'
import SideDrawer from './src/Components/SideDrawer';
import MyDrawer from './src/Navigation/Drawer/Drawer';


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Employer">
        <Stack.Screen name="Welcome" component={Welcome}
          options={({ navigation }) => ({ header: (props) => null })}
        />
            <Stack.Screen name="Register" component={Register}
          options={({ navigation }) => ({ header: (props) => null })}
        />
           <Stack.Screen name="Login" component={Login}
          options={({ navigation }) => ({ header: (props) => null })}
        />
               <Stack.Screen name="Candidate" component={Candidate}
          options={({ navigation }) => ({ header: (props) => null })}
        />
              <Stack.Screen name="BrowseJobs" component={BrowseJobs}
          options={({ navigation }) => ({ header: (props) => null })}
        />
            <Stack.Screen name="Filter" component={Filter}
          options={({ navigation }) => ({ header: (props) => null })}
        />
           <Stack.Screen name="Applyjob" component={Applyjob}
          options={({ navigation }) => ({ header: (props) => null })}
        />
            <Stack.Screen name="Invitations" component={Invitations}
          options={({ navigation }) => ({ header: (props) => null })}
        />
           <Stack.Screen name="BrowseCandidates" component={BrowseCandidates}
          options={({ navigation }) => ({ header: (props) => null })}
        />
          <Stack.Screen name="Favorite" component={Favorite}
          options={({ navigation }) => ({ header: (props) => null })}
        />
          <Stack.Screen name="Hired" component={Hired}
          options={({ navigation }) => ({ header: (props) => null })}
        />
           <Stack.Screen name="Invitationentries" component={Invitationentries}
          options={({ navigation }) => ({ header: (props) => null })}
        />
          <Stack.Screen name="Jobs" component={Jobs}
          options={({ navigation }) => ({ header: (props) => null })}
        />
          <Stack.Screen name="Employer" component={Employer}
          options={({ navigation }) => ({ header: (props) => null })}
        />
        <Stack.Screen name="MyProfile" component={MyProfile}
          options={({ navigation }) => ({ header: (props) => null })}
        />
           <Stack.Screen name="SideDrawer" component={SideDrawer}
          options={({ navigation }) => ({ header: (props) => null })}
        />
         <Stack.Screen name="MyDrawer" component={MyDrawer}
          options={({ navigation }) => ({ header: (props) => null })}
        />
    
      </Stack.Navigator>
    
    </NavigationContainer>

  );
};



export default App;
