import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,FlatList ,Button,Modal,TextInput} from 'react-native';
import { Content,Container,Tabs,Tab } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';
import ProfileText from '../Components/ProfileText';
import CandidateTab from '../Components/CandidateTab';



const MyResume = ({ navigation, }) => {

   


return (
<Container>
<MyHeader  navigation={navigation}/>
<Content >

<View style={{flex:1}}>
    <View style={{marginLeft:40}}>
<Text style={styles.text}>My Resumes</Text>
<View style={styles.line}>
</View>
</View>
<View style={{alignItems:'center',flexDirection:'row'}}>
<TouchableOpacity style={{marginLeft:35}}>
        <View style={styles.button}>
            
       <Text style={styles.btext} >View</Text>
       </View>
       </TouchableOpacity>
       <TouchableOpacity style={{marginLeft:25}} >
        <View style={styles.button}>
            
       <Text style={styles.btext} >Delete</Text>
       </View>
       </TouchableOpacity>
       </View>
       
</View>



</Content>
<CandidateTab navigation={navigation}/>
</Container>
  )    
}
export default MyResume;
const styles = StyleSheet.create({
   
btext:{
    textAlign:'center',color:'white',fontWeight:'bold',marginTop:8
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
    backgroundColor:'#001F3F',
    borderWidth:1,
    borderColor:'black',
    borderRadius:5,
  alignContent:'center',
    marginBottom:15,
   
    marginTop:30
  
},

})