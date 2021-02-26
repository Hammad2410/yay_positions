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

import CandidateTab from '../Tab/CandidateTab';
import EmployerTab from '../Tab/EmployerTab';

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CandidateHome">
                <Stack.Screen name="Welcome" component={Welcome}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                <Stack.Screen name="Register" component={Register}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                <Stack.Screen name="Login" component={Login}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                <Stack.Screen name="CandidateHome" component={CandidateTab}
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
            </Stack.Navigator>

            {/* <EmployerTab /> */}

        </NavigationContainer>

    );
};



export default Navigator;
