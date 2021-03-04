import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DIcon from 'react-native-vector-icons/SimpleLineIcons';
import PIcon from 'react-native-vector-icons/FontAwesome';
import JIcon from 'react-native-vector-icons/Foundation';
import IIcon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { color } from 'react-native-reanimated';


export function DrawerContent(props) {

    const paperTheme = useTheme();

   

    return(
        <View style={{flex:1,backgroundColor:'#001F3F'}}>
            <DrawerContentScrollView {...props}  style={{ }}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'column',marginTop: 15,alignItems:'center'}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                                style={{alignSelf:"center"}}
                            />
                            <View style={{flexDirection:'column'}}>
                                <Title style={styles.title}>Jason Jackson</Title>
                                <Caption style={[styles.caption,{alignSelf:'center'}]}>Candidate</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.bottomDrawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <DIcon 
                                name="screen-smartphone" 
                                color='#009961'
                                size={size}
                                />
                            )} 
                            label="Dashboard" labelStyle={{color:'white'}}
                            onPress={() => {props.navigation.navigate('Dashboard')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <IIcon 
                                name="person" 
                                color='#009961'
                                size={size}
                                />
                            )}
                            label="View My Profile" labelStyle={{color:'white'}}
                            onPress={() => {props.navigation.navigate('ViewMyProfile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <PIcon 
                                name="id-card" 
                                color='#009961'
                                size={21}
                                />
                            )}
                            label="Update Profile" labelStyle={{color:'white'}}
                            onPress={() => {props.navigation.navigate('UpdateProfile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color='#009961'
                                size={size}
                                />
                            )}
                            label="Educational Information" labelStyle={{color:'white'}}
                            onPress={() => {props.navigation.navigate('EducationalInformation')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <JIcon 
                                name="graph-bar" 
                                color='#009961'
                                size={28}
                                />
                            )}
                            label="Job Experiences" labelStyle={{color:'white'}}
                            onPress={() => {props.navigation.navigate('JobExperiences')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <PIcon 
                                name="file-text" 
                                color='#009961'
                                size={28}
                                />
                            )}
                            label="My Resume" labelStyle={{color:'white'}}
                            onPress={() => {props.navigation.navigate('MyResume')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="upload" 
                                color='#009961'
                                size={size}
                                />
                            )}
                            label="Browse Jobs"  labelStyle={{color:'white'}}
                            onPress={() => {props.navigation.navigate('BrowseJobs')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MIcon 
                                name="mail" 
                                color='#009961'
                                size={size}
                                />
                            )}
                            label="Invitations" labelStyle={{color:'white'}}
                            onPress={() => {props.navigation.navigate('Invitations')}}
                        />
                       
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MIcon 
                                name="save" 
                                color='#009961'
                                size={size}
                                />
                            )}
                            label="Saved Jobs" labelStyle={{color:'white'}}
                            onPress={() => {props.navigation.navigate('SavedJobs')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <IIcon 
                                name="md-settings-sharp" 
                                color='#009961'
                                size={size}
                                />
                            )}
                            label="Change Password" labelStyle={{color:'white'}}
                            onPress={() => {props.navigation.navigate('ChangePassword')}}
                        />
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
           
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,

    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color:'white'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color:'white'
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginTop: 15,
        marginBottom:15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });