import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,FlatList ,Button,Modal,TextInput} from 'react-native';
import { Content,Container,Tabs,Tab } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';
import ProfileText from '../Components/ProfileText';
import DocumentPicker from 'react-native-document-picker';
import ButtonP from '../Components/ButtonP';

import DatePicker from 'react-native-date-picker';

const CompanyDetail = ({ navigation, }) => {
    
    const [Photo,setPhoto] = useState('');
    const openPhoto = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            setPhoto(res);
        

            console.log(
                res.uri,
                res.type, // mime type
                res.name,
                res.size
            );
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    }

return (
<Container>
<MyHeader/>
<Content >

<View style={{flex:1}}>
    <View style={{marginLeft:40}}>
<Text style={styles.text}>Company Details</Text>
<View style={styles.line}>
</View>
</View>


<View style={{marginTop:10,alignItems:'center'}}>

<ProfileText nametext="Company Name"  marginLeftt={-230} />
<TextInputLogin  name1="Abc international"  />
<ProfileText nametext="Phone No." marginLeftt={-260}/>
<TextInputLogin  name1="2233432423" Ktype={'number-pad'} />
<ProfileText nametext="Headline"  marginLeftt={-265} />
<TextInputLogin  name1="Test"  />
<ProfileText nametext="Website"  marginLeftt={-265} />
<TextInputLogin  name1="www.abcinternational.com.pk"  />
<ProfileText nametext="Profile Image" marginLeftt={-243} />
<View style={{ height:hp('5%'),
        width:wp('80%'),
        borderColor:'#707070',
        borderWidth:0.5,
        borderRadius:5,
        fontSize:12,
        padding:10,
        marginBottom:15,
        alignSelf:'center',flexDirection:'row'}}>
            <TouchableOpacity   onPress={() => openPhoto()}
                    style={{
                        borderColor: '#707070',
                         backgroundColor: '#E4E4E4',width:90,

                    }}>
              <Text style={{ textAlign:'center' }}>
                        Choose File
                    </Text>
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: '5%',color:'#707070' }}>
                        {Photo.name || 'No File Chosen'}
                    </Text>
        </View>

<ProfileText nametext="Description" marginLeftt={-255}/>
<TextInput placeholder="Test" placeholderTextColor='#707070'  style={styles.textinput}></TextInput>
<ButtonP NameButton="Update Information"/>
</View>

</View>

</Content>
</Container>
  )    
}
export default CompanyDetail;
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


})