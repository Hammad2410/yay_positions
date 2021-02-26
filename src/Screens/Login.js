import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { Content,Container,Tabs,Tab,Footer,FooterTab } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';
import CheckBox from '@react-native-community/checkbox';


const Login = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Password, setPassword] = useState('');
return (
<Container>
<MyHeader/>
<Content contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}>

<View style={{flex:1}}>
    <View style={{marginTop:30,marginLeft:40}}>
<Text style={styles.text}>Login</Text>
<View style={styles.line}>
</View>
</View>
<View style={{height:200,alignItems:'center',marginTop:'7%'}}>
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
    <TextInputLogin/>
    <TextInputLogin value name1="Password"/>
   
</View>
<View style={{flexDirection:'row',marginLeft:35,marginVertical:8}}>
<CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={{paddingTop:5,color:'#707070',fontSize:12}}> Remember me?</Text>
</View>
<View style={{flexDirection:'row',marginLeft:35}}>
<TouchableOpacity style={styles.btn}>
<Text style={styles.btntext}>Login</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.btn1}>
<Text style={styles.btntext1}>Register as new user</Text>
</TouchableOpacity>
</View>
</View>
</Content>
<Footer style={{backgroundColor:'#009961',height:40}}> 

</Footer>
</Container>
  )    
}
export default Login;
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
    width:wp('30%'),
    height:hp(6),
    borderRadius:30,
    justifyContent: 'center',
    
},
btn1:{
    backgroundColor:'white',
    width:wp('50%'),
    height:hp(6),
    borderRadius:30,
    borderWidth:2,
    borderColor:'#009961',
    justifyContent: 'center',
    marginLeft:10
    
},
btntext:
{
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize:12
},
btntext1:
{
    textAlign: 'center',
    justifyContent: 'center',
    color: '#009961',
    fontWeight: 'bold',
    fontSize:12
}


})