import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,StyleSheet
} from 'react-native';
import {Header,Title, Left } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';



const SideDrawer = ({ props }) => {
    const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
      //Props to open/close the drawer
      props.navigationProps.toggleDrawer();
    };
return (

<Header androidStatusBarColor="#001F3F" 
style={styles.header}> 
 
        <Left style={{flex:1}}>
        <TouchableOpacity onPress={()=> toggleDrawer()}>
    <Icon name={'reorder-two'} size={40} color="white" ></Icon>
    </TouchableOpacity>
    </Left>
<Title style={styles.title}>Candidate Dashboard</Title>
</Header>

 
  )    
}

export default SideDrawer;
const styles = StyleSheet.create({
    header:{
        backgroundColor:'#001F3F',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        color:'white',
        textAlign:'center',
        fontFamily:'Segoe UI',
        fontWeight:'500',
       marginRight:70,
    marginBottom:2
        
    },

})
