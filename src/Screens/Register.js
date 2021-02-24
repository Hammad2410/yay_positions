import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { Content,Container,Tabs,Tab } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';


const Register = ({ navigation }) => {
return (
<Container>
<MyHeader/>
<Content contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}>

<View style={{flex:1}}>
    <View style={{marginTop:30,marginLeft:40}}>
<Text style={styles.text}>Register</Text>
<View style={styles.line}>
</View>
</View>
<View style={{height:200,alignItems:'center',marginTop:'7%'}}>
    <TextInputLogin/>
    <TextInputLogin name1="Name"/>
    <Tabs style={{marginTop:10,width:'80%',alignSelf:'center'}} tabBarUnderlineStyle={{borderColor:'#009961'}}>
       <Tab heading="Candidate" tabStyle={{backgroundColor: '#009961'}} 
       textStyle={{color: 'white',fontSize:12}} activeTabStyle={{backgroundColor: '#016742'}} 
       activeTextStyle={{color: '#fff', fontWeight: 'normal',fontSize:13}}>
      </Tab>
      <Tab heading="Employer" tabStyle={{backgroundColor: '#009961'}} 
       textStyle={{color: 'white',fontSize:12}} activeTabStyle={{backgroundColor: '#016742'}} 
       activeTextStyle={{color: '#fff', fontWeight: 'normal',fontSize:13}}>
      </Tab>
        </Tabs>
</View>
<View style={{alignItems:'center',height:170}}>
<TextInputLogin name1="Country"/>
<TextInputLogin name1="Password"/>
<TextInputLogin name1="Confirm Password"/>
</View>
<TouchableOpacity style={styles.btn}>
<Text style={styles.btntext}>Register</Text>
</TouchableOpacity>
</View>
</Content>
</Container>
  )    
}
export default Register;
const styles = StyleSheet.create({
text:{
    color:'#707070',
    fontSize:20
},
line:{
    height:5,
    width:wp('11%'),
    backgroundColor:'#009961',
    borderColor:'#707070',
    borderWidth:2,
    marginTop:10
},
btn:{
    backgroundColor:'#009961',
    width:wp('40%'),
    height:hp(6),
    marginLeft:'10%',
    borderRadius:30,
    justifyContent: 'center',
    
},
btntext:
{
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold'
}


})