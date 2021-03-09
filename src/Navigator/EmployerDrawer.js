import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
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
                                <Caption style={[styles.caption,{alignSelf:'center'}]}>Employer</Caption>
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
                                <Image resizeMode='contain' style={{width:25,height:20,tintColor:'#009961'}} source={require('../assests/image/profile1.png') } />

                            )}
                            label="Company Details" labelStyle={{color:'white'}}
                            onPress={() => {props.navigation.navigate('CompanyDetail')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Image resizeMode='contain' style={{width:25,height:20,tintColor:'#009961'}} source={require('../assests/image/case.png') } />

                            )}
                            label="Jobs" labelStyle={{color:'white'}}
                            onPress={() => {props.navigation.navigate('Jobs')}}
                        />
                       
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image resizeMode='contain' style={{width:25,height:20,tintColor:'#009961'}} source={require('../assests/image/upload.png') } />

                            )}
                            label="Browse Candidates"  labelStyle={{color:'white'}}
                            onPress={() => {props.navigation.navigate('BrowseCandidates')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <IIcon 
                                name="ios-heart" 
                                color='#009961'
                                size={size}
                                />
                            )}
                            label="Favorites" labelStyle={{color:'white'}}
                            onPress={() => {props.navigation.navigate('Favorite')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image resizeMode='contain' style={{width:25,height:20,tintColor:'#009961'}} source={require('../assests/image/person.png') } />

                            )}
                            label="Hired Candidates" labelStyle={{color:'white'}}
                            onPress={() => {props.navigation.navigate('Hired')}}
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