import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,FlatList ,Button,Modal} from 'react-native';
import { Content,Container,Tabs,Tab } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';
import ProfileText from '../Components/ProfileText';
import Icon from 'react-native-vector-icons/Feather';
import Dropdown from '../Components/Dropdown';
import ButtonP from '../Components/ButtonP';
import DocumentPicker from 'react-native-document-picker';
import DatePicker from 'react-native-date-picker';
import Tags from "react-native-tags";


const PersonalInfo = ({ navigation, }) => {
    const [date, setDate] = useState(new Date());
    const [datename, setDateName] = useState('mm/dd/yy');
    const [Photo,setPhoto] = useState('');
    const [PPhoto,setPPhoto] = useState('');
    const [Resume,setResume] = useState('');
    const [DatemodalVisible, setDateModalVisible] = useState(false);
    const DateModal = () => {
        setDateModalVisible(!DatemodalVisible)

    }

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

    const openResume = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            
            
            setResume(res);

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
    const openPPhoto = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            
            
            setPPhoto(res);

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
    <View style={{marginTop:30,marginLeft:40}}>
<Text style={styles.text}>Personal Information</Text>
<View style={styles.line}>
</View>
</View>


<View style={{marginTop:40,alignItems:'center'}}>

<ProfileText nametext="Your Full Name"  marginLeftt={-235} />
<TextInputLogin  name1="Test Candidate"  />
<ProfileText nametext="Email" marginLeftt={-285}/>
<TextInputLogin  name1="abc@gmail.com"  />
<ProfileText nametext="Phone"  marginLeftt={-280}/>
<TextInputLogin  name1="637352322" Ktype='number-pad' />
<ProfileText nametext="Date of birth" marginLeftt={-247} />
<View style={{flexDirection:'row',alignSelf:'center'}}>

<View style={{ height:hp('5%'),
        width:wp('80%'),
        borderColor:'#707070',
        borderWidth:0.5,
        borderRadius:5,
        fontSize:12,
        padding:10,
        marginBottom:15,
        alignSelf:'center',flexDirection:'row'}}>
<TouchableOpacity
                       
                        onPress={() => DateModal()}>
                        <Text style={{
                           
                            color: '#707070'
                        }}>{datename}</Text>
                        
                    </TouchableOpacity>
                    
                   
                    </View>
                    <TouchableOpacity  onPress={() => DateModal()}>
                    <Icon name="calendar" size={20} color="#707070" style={{alignSelf:'center', right:8,top:10, position:'absolute'}} /></TouchableOpacity>
</View>
<View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={DatemodalVisible}
                    >
                        <View style={{
                            width: wp('100%'),
                            height: '23%', marginTop: '5%'
                            , backgroundColor: 'white', flexDirection: 'row',
                            position: 'absolute',
                            bottom: 0,
                            alignSelf:'center'
                        }}>
                            <TouchableOpacity
                                onPress={() => setDateModalVisible(false)}

                                style={{
                                    borderRadius: 5,
                                    alignSelf: 'flex-start',
                                    marginVertical: '3%',
                                    marginHorizontal:'1%',
                                    // marginLeft: '3%',
                                    borderColor: 'grey',
                                    borderWidth: 1, backgroundColor: '#fff',
                                    width: wp('20%'), height: hp('5%')
                                }}>

                                <Text style={{ marginTop:5,
                                    paddingHorizontal: '15%', paddingVertical: 4, color: 'black'
                                }}>CANCEL</Text>
                            </TouchableOpacity>

                            <DatePicker style={{ marginHorizontal: '10%' }}
                                date={date}
                                mode="date"
                                style={{
                                    width: wp('50%'),
                                    marginTop: '3%',
                                    marginLeft: '2%'
                                }}

                                minimumDate={new Date()}
                                onDateChange={(date) => setDate(date)}

                            />
                            <TouchableOpacity style={{
                                borderRadius: 5,
                                alignSelf: 'flex-start'
                                , justifyContent: 'center',
                                marginVertical: '3%',
                                marginLeft: '4%',
                                borderColor: 'grey',
                                borderWidth: 1, backgroundColor: '#fff',
                                width: wp('20%'), height: hp('5%')

                            }}
                                onPress={() => {
                                    setDateName(date.toString().substr(0, 15))
                                    setDateModalVisible(false)
                                }}
                            >

                                <Text style={{
                                   
                                    paddingHorizontal: '24%', paddingVertical: 4, color: 'black'
                                }}>DONE</Text>
                            </TouchableOpacity>




                        </View>

                    </Modal>
                </View>
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
<ProfileText nametext="Experience" marginLeftt={-255} />
<Dropdown />

<ProfileText nametext="Level"  marginLeftt={-285} />
<Dropdown plholder="Skilled work"/>
<ProfileText nametext="Qualification" marginLeftt={-250}/>
<Dropdown plholder="Bachelors"/>
<ProfileText nametext="Type" marginLeftt={-290} />
<Dropdown plholder="Full time"/>
<ProfileText nametext="Salary Type" marginLeftt={-255} />
<Dropdown plholder="Salary Type"/>
<ProfileText nametext="Salary Range"  marginLeftt={-245} />
<Dropdown plholder="Salary Range"/>
<ButtonP NameButton="Save"/>
</View>

<View style={{marginTop:30,marginLeft:40}}>
<Text style={styles.text}>Skills</Text>
<View style={styles.line}/>
</View>
<View style={{marginTop:20,alignItems:'center'}}>
<ProfileText nametext="Select Skills"  marginLeftt={-250} />
<Tags
    
    textInputProps={{
      placeholder: "Application Development"
    }}
    initialTags={["Application Development"]}
    onChangeTags={tags => console.log(tags)}
    onTagPress={(index, tagLabel, event, deleted) =>
      console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
    }
    inputStyle={{ backgroundColor: "white" }}
    containerStyle={{ justifyContent: "center" }}
    style={{flex:1,flexDirection:'row' ,
        width:wp('80%'),
        borderColor:'#707070',
        borderWidth:0.5,
        borderRadius:5,
        fontSize:12,
      
       
        }}
  
  />
  


<ButtonP NameButton="Save Skills"/>
</View>


<View style={{marginTop:30,marginLeft:40}}>
<Text style={styles.text}>Resume</Text>
<View style={styles.line}/>
</View>
<View style={{marginTop:20,alignItems:'center'}}>
<ProfileText nametext="Select Resume"  marginLeftt={-235} />
<View style={{ height:hp('5%'),
        width:wp('80%'),
        borderColor:'#707070',
        borderWidth:0.5,
        borderRadius:5,
        fontSize:12,
        padding:10,
        marginBottom:15,
        alignSelf:'center',flexDirection:'row'}}>
            <TouchableOpacity   onPress={() => openResume()}
                    style={{
                        borderColor: '#707070',
                         backgroundColor: '#E4E4E4',width:90,

                    }}>
              <Text style={{ textAlign:'center' }}>
                        Choose File
                    </Text>
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: '5%',color:'#707070' }}>
                        {Resume.name || 'No File Chosen'}
                    </Text>
        </View>
<ButtonP NameButton="Save Skills"/>
</View>

<View style={{marginTop:30,marginLeft:40}}>
<Text style={styles.text}>Portfolio</Text>
<View style={styles.line}/>
</View>
<View style={{marginTop:20,alignItems:'center'}}>
<ProfileText nametext="Add Description of your projects"  marginLeftt={-140} />
<TextInputLogin   />
<ProfileText nametext="Add Photos of your projects"  marginLeftt={-165} />
<View style={{ height:hp('5%'),
        width:wp('80%'),
        borderColor:'#707070',
        borderWidth:0.5,
        borderRadius:5,
        fontSize:12,
        padding:10,
        marginBottom:15,
        alignSelf:'center',flexDirection:'row'}}>
            <TouchableOpacity   onPress={() => openPPhoto()}
                    style={{
                        borderColor: '#707070',
                         backgroundColor: '#E4E4E4',width:90,

                    }}>
              <Text style={{ textAlign:'center' }}>
                        Choose File
                    </Text>
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: '5%',color:'#707070' }}>
                        {PPhoto.name || 'No File Chosen'}
                    </Text>
        </View>

<ButtonP NameButton="Save Skills"/>
</View>

</View>

</Content>
</Container>
  )    
}
export default PersonalInfo;
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



})