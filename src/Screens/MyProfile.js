import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,TextInput } from 'react-native';
import { Content,Container,Header,Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import MyHeader from '../Components/LoginSignupHeader'
import Profile from '../Components/Profile'


const MyProfile = ({ navigation }) => {
return (
<Container style={{backgroundColor:'white'}} >
<MyHeader/>
<Content >
<View style={{flex:1}}>
    <View style={{marginLeft:25}}>
<Text style={styles.text}>MyProfile</Text>
<View style={styles.line}>
</View>
</View>

<Profile bottom={10}/>
</View>
</Content>
</Container>
  )    
}
export default MyProfile;

const styles = StyleSheet.create({
    text:{
        color:'#707070',
        fontSize:20,
    },
    line:{
        height:5,
        width:wp('11%'),
        backgroundColor:'#009961',
        borderColor:'#707070',
        borderWidth:2,
        marginTop:10
    },
    text1:{
        fontSize:12,
        color:'black',
        fontFamily:'Segoe UI',
        fontWeight:'bold',
        paddingLeft:20,
        paddingRight:5,
        paddingTop:15
      
    },
    text2:{
        fontSize:12,
        color:'black',
        fontFamily:'Segoe UI',
        fontWeight:'bold',
        paddingLeft:5,
        paddingRight:5,
        paddingTop:15
      
    },
    text3:{
        fontSize:12,
        color:'black',
        fontFamily:'Segoe UI',
        fontWeight:'bold',
       marginLeft:50,
        paddingRight:5,
        paddingTop:15
      
    },
 input:{
     width:wp('22%'),
    height:35,
    borderWidth:1,
    borderRadius:5,
    marginTop:10,
    borderColor:'#707070',
    fontSize:10

 },
 text4:{
    fontSize:12,
    color:'#666666',
    fontFamily:'Segoe UI',
   marginLeft:20,
    paddingTop:15
  
},
text5:{
    fontSize:12,
    color:'#666666',
    fontFamily:'Segoe UI',
   marginLeft:80,
    paddingTop:15
  
},
text6:{
    fontSize:12,
    color:'#666666',
    fontFamily:'Segoe UI',
    paddingTop:15
  
},


})