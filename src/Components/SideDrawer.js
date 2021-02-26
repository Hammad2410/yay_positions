import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { Content,Container,Header,Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';


const SideDrawer = ({ navigation }) => {
return (

<Header androidStatusBarColor="#001F3F" 
style={styles.header}> 
 
        <Left style={{flex:1}}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
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