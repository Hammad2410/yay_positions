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
    Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import Welcome from '../Screens/Welcome';
import Register from '../Screens/Register'
import Login from '../Screens/Login'
import Candidate from '../Screens/Candidate'
import BrowseJobs from '../Screens/BrowseJobs'
import Filter from '../Screens/Filter'
import Applyjob from '../Screens/Applyjob'
import Invitations from '../Screens/Invitations'
import BrowseCandidates from '../Screens/BrowseCandidates'
import Favorite from '../Screens/Favorite'
import Hired from '../Screens/Hired'
import Invitationentries from '../Screens/Invitationentries'
import Jobs from '../Screens/Jobs'
import Employer from '../Screens/Employer'
import MyProfile from '../Screens/MyProfile'
import Educationalinfo from '../Screens/Educationalinfo'
import CandidateTab from '../Tab/CandidateTab';
import EmployerTab from '../Tab/EmployerTab';
import JobExper from '../Screens/JobExper';
import MyResume from '../Screens/MyResume';
import Changepass from '../Screens/Changepass';
import SavedJobs from '../Screens/SavedJobs'
import CompanyDetail from '../Screens/CompanyDetail'

import { DrawerContent } from './EmployerDrawer';

const EmployerDrawer = () => {
    return (
       
        <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} />}>
            
            <Drawer.Screen name="Dashboard" component={Employer}
                options={({ navigation }) => ({ header: (props) => null })}
            />
            <Drawer.Screen name="CompanyDetail" component={CompanyDetail}
                options={({ navigation }) => ({ header: (props) => null })}
            />
          
            <Drawer.Screen name="Invitations" component={Invitations}
                options={({ navigation }) => ({ header: (props) => null })}
            />
            <Drawer.Screen name="BrowseCandidates" component={BrowseCandidates}
                options={({ navigation }) => ({ header: (props) => null })}
            />
             <Drawer.Screen name="Favorite" component={Favorite}
                options={({ navigation }) => ({ header: (props) => null })}
            />
             <Drawer.Screen name="Hired" component={Hired}
                options={({ navigation }) => ({ header: (props) => null })}
            />
             <Drawer.Screen name="Jobs" component={Jobs}
                options={({ navigation }) => ({ header: (props) => null })}
            />
        </Drawer.Navigator>
    )
}


export default EmployerDrawer;