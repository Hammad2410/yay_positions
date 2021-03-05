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
import PersonalInfo from '../Screens/PersonalInfo'
import CreateJob from '../Screens/CreateJob'
import Efilter from '../Screens/Efilter'
import CompanyDetail from '../Screens/CompanyDetail'
import CProfile from '../Screens/CProfile'
import { DrawerContent } from './CandidateDrawer';
import EmployerDrawer from './EmployerNavigatorDrawer'
const CandidateDrawer = () => {
    return (
       
        <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} />}>
            
            <Drawer.Screen name="Dashboard" component={Candidate}
                options={({ navigation }) => ({ header: (props) => null })}
            />
            <Drawer.Screen name="UpdateProfile" component={PersonalInfo}
                options={({ navigation }) => ({ header: (props) => null })}
            />
            <Drawer.Screen name="EducationalInformation" component={Educationalinfo}
                options={({ navigation }) => ({ header: (props) => null })}
            />
            <Drawer.Screen name="JobExperiences" component={JobExper}
                options={({ navigation }) => ({ header: (props) => null })}
            />
            <Drawer.Screen name="MyResume" component={MyResume}
                options={({ navigation }) => ({ header: (props) => null })}
            />
            <Drawer.Screen name="ChangePassword" component={Changepass}
                options={({ navigation }) => ({ header: (props) => null })}
            />
            <Drawer.Screen name="ViewMyProfile" component={MyProfile}
                options={({ navigation }) => ({ header: (props) => null })}
            />
            <Drawer.Screen name="Invitations" component={Invitations}
                options={({ navigation }) => ({ header: (props) => null })}
            />
            <Drawer.Screen name="BrowseJobs" component={BrowseJobs}
                options={({ navigation }) => ({ header: (props) => null })}
            />
             <Drawer.Screen name="SavedJobs" component={SavedJobs}
                options={({ navigation }) => ({ header: (props) => null })}
            />
              
        </Drawer.Navigator>
    )
}


const Navigator = () => {
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
                <Stack.Screen name="CandidateHome" component={CandidateDrawer}
                    options={({ navigation }) => ({ header: (props) => null })}
                />

              
                <Stack.Screen name="Employer" component={EmployerDrawer}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                <Stack.Screen name="CreateJob" component={CreateJob}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                <Stack.Screen name="Applyjob" component={Applyjob}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                <Stack.Screen name="Filter" component={Filter}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                <Stack.Screen name="Efilter" component={Efilter}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                <Stack.Screen name="CompanyDetail" component={CompanyDetail}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                <Stack.Screen name="Jobs" component={Jobs}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                 <Stack.Screen name="Invitationentries" component={Invitationentries}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                 <Stack.Screen name="BrowseCandidates" component={BrowseCandidates}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                <Stack.Screen name="MyResume" component={MyResume}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                 <Stack.Screen name="PersonalInfo" component={PersonalInfo}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                 <Stack.Screen name="MyProfile" component={MyProfile}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                 <Stack.Screen name="BrowseJobs" component={BrowseJobs}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                <Stack.Screen name="Invitations" component={Invitations}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                <Stack.Screen name="Favorite" component={Favorite}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
                <Stack.Screen name="CProfile" component={CProfile}
                    options={({ navigation }) => ({ header: (props) => null })}
                />
            </Stack.Navigator>

        </NavigationContainer>

    );
};



export default Navigator;
