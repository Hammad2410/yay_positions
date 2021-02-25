import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,FlatList ,Button,Modal,TextInput} from 'react-native';
import { Content,Container,Tabs,Tab } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';

import ProfileText from '../Components/ProfileText';

import ButtonP from '../Components/ButtonP';


const Changepass = ({ navigation, }) => {
    const [OldPass, setOldPass] = useState("");
    const [NewPass, setNewPass] = useState("");
    const [ChangePass, setChangePass] = useState("");

return (
<Container>
<MyHeader/>
<Content >

<View style={{flex:1}}>
    <View style={{marginLeft:40}}>
<Text style={styles.text}>Change Password</Text>
<View style={styles.line}>
</View>
</View>
<View style={{marginTop:10,alignItems:'center'}}>

<ProfileText nametext="Old Password"  marginLeftt={-240} />
<TextInput  onChangeText={(OldPass) => setOldPass(OldPass)} placeholder="Selection34" placeholderTextColor='#707070' secureTextEntry style={styles.textinput}/>
<ProfileText nametext="New Password" marginLeftt={-235}/>
<TextInput  onChangeText={(NewPass) => setNewPass(NewPass)} placeholder="*********" placeholderTextColor='#707070' secureTextEntry
       style={styles.textinput}/>
<ProfileText nametext="Change Password" marginLeftt={-218}/>
<TextInput onChangeText={(ChangePass) => setChangePass(ChangePass)} placeholder="*********" placeholderTextColor='#707070' secureTextEntry
       style={styles.textinput}/>

<TouchableOpacity style={{marginLeft:-240}}>
        <View style={styles.button}>
            
       <Text style={styles.btext} >Save</Text>
       </View>
       </TouchableOpacity>
    
       
</View>
       
</View>



</Content>
</Container>
  )    
}
export default Changepass;
const styles = StyleSheet.create({
   
btext:{
    textAlign:'center',marginTop:8
},    
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


button:{
    height:hp('4.5%'),
    width:wp('20%'),
    borderColor:'#707070',
    borderWidth:0.5,
    borderRadius:5,
  alignContent:'center',
    marginBottom:15,
    marginTop:30
  
},
textinput:{
        
    height:hp('5%'),
    width:wp('80%'),
    borderColor:'#707070',
    borderWidth:0.5,
    borderRadius:5,
    fontSize:12,
    padding:10,
    marginBottom:15,
    alignSelf:'center',
},
})