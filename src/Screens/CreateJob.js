import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,FlatList ,Button,Modal,TextInput} from 'react-native';
import { Content,Container,Tabs,Tab } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';
import ProfileText from '../Components/ProfileText';




const CreateJob = ({ navigation, }) => {

   


return (
<Container>
<MyHeader navigation={navigation}/>
<Content >

<View style={{flex:1}}>
    <View style={{marginLeft:40}}>
<Text style={styles.text}>Create Job</Text>
<View style={styles.line}>
</View>
</View>


<View style={{marginTop:10,alignItems:'center'}}>

<ProfileText nametext="Title"  marginLeftt={-290} />
<TextInputLogin  label="Test"  />
<ProfileText nametext="Level" marginLeftt={-285}/>
<TextInputLogin  label="Test"  />
<ProfileText nametext="Experience" marginLeftt={-255}/>
<TextInputLogin  label="Test"  />
<ProfileText nametext="Qualification" marginLeftt={-245}/>
<TextInputLogin  label="Test"  />
<ProfileText nametext="Job Type" marginLeftt={-265}/>
<TextInputLogin  label="Test"  />
<ProfileText nametext="Salary Type" marginLeftt={-252}/>
<TextInputLogin  label="Test"  />
<ProfileText nametext="Salary Range" marginLeftt={-245}/>
<TextInputLogin  label="Test"  />
<ProfileText nametext="Location" marginLeftt={-267}/>
<TextInputLogin  label="Test"  />
<ProfileText nametext="Remote or Inhouse" marginLeftt={-212}/>
<TextInputLogin  label="Test"  />
<ProfileText nametext="Select Skills" marginLeftt={-248}/>
<TextInputLogin  label="Test"  />
<ProfileText nametext="Job Description" marginLeftt={-230}/>
<TextInput placeholder="Test" placeholderTextColor='#707070'  style={styles.textinput}></TextInput>
<ProfileText nametext="Details" marginLeftt={-278}/>
<TextInput placeholder="Test" placeholderTextColor='#707070'  style={styles.textinput}></TextInput>
<TouchableOpacity>
        <View style={styles.button}>
            
       <Text style={{textAlign:'center',marginTop:5,color:'#009961',fontWeight:'bold'}} >Create Job</Text>
       </View>
       </TouchableOpacity>
</View>

</View>

</Content>
</Container>
  )    
}
export default CreateJob;
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

textinput:{
    height:hp('15%'),
    width:wp('80%'),
    borderColor:'#707070',
    borderWidth:0.5,
    borderRadius:5,
    fontSize:12,
    padding:10,
    textAlignVertical:'top'
  
},
button:{
    height:hp('4%'),
    width:wp('25%'),
    borderColor:'#009961',
    borderWidth:0.5,
    borderRadius:5,
  alignContent:'center',
    marginBottom:15,
    marginLeft:-158,
    marginTop:30
  
},

})