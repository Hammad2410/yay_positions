import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Button, Modal } from 'react-native';
import { Content, Container, Tabs, Tab } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';
import ProfileText from '../Components/ProfileText';
import Icon from 'react-native-vector-icons/Feather';
import ButtonP from '../Components/ButtonP';
import DocumentPicker from 'react-native-document-picker';
import DatePicker from 'react-native-date-picker';
import Tags from "react-native-tags";
import CandidateTab from '../Components/CandidateTab';
import DropDownPicker from 'react-native-dropdown-picker';
import { updatePersonalInfo, updateSkills, updateResume, updatePortfolio } from '../redux/actions/candidate';
import { connect } from 'react-redux';
var RNFS = require('react-native-fs');

const PersonalInfo = ({ navigation, auth, updatePersonalInfo, updateSkills, updateResume, updatePortfolio }) => {
    const [Fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [date, setDate] = useState(new Date());
    const [datename, setDateName] = useState('mm/dd/yy');
    const [Photo, setPhoto] = useState('');
    const [PPhoto, setPPhoto] = useState('');
    const [Resume, setResume] = useState('');
    const [skills, setSkills] = useState([]);
    const [DatemodalVisible, setDateModalVisible] = useState(false);
    const DateModal = () => {
        setDateModalVisible(!DatemodalVisible)
    }
    const [Experience,setExperience] =('Select');
    const [level,setLevel] =('Select');
    const [Qualification,setQualification] =('Select');
    const [Type,setType] =('Select');
    const [SType,setSType] =('Select');

    var Exp=[
        {label: 'Select', value: 0, }, 
        {label: '1 year', value: 1,},
        {label: '2 years', value: 2, },
        {label: '3 years', value: 3, },
        {label: '4 years', value: 4, },
        {label: '5 years', value: 5, },
        {label: '6 years', value: 6, },
        {label: '7 years', value: 7, },
        {label: '8 years', value: 8, },
        {label: '9 years', value: 9, },
        {label: '10 years', value: 10, },
        {label: '10+years', value: 11, },
            ]
    var Level =[
        {label: 'Select', value: 0, }, 
        {label: 'Fresh', value: 1,},
        {label: 'Student', value: 2 },
        {label: 'Skilled Worker', value: 3}, 
        {label: 'Semi Skilled Worker', value: 4},
        {label: 'Executive', value: 5},
        {label: 'Officer', value: 6},
        {label: 'Specialist', value: 7},
        {label: 'Manager', value: 8},
        {label: 'Professional', value: 9}, ]

    var Qual=[
        {label: 'Select', value: 0, },
        {label: 'High School', value: 1, }, 
        {label: 'Bachelor', value: 2,},
        {label: 'Master', value: 3, },
        {label: 'Doctorate', value: 4,}, 
        {label: 'Diploma', value: 5,},
        {label: 'MBBS', value: 6,},
        ]
    var Typ =[
        {label: 'Select', value: 0 },
        {label: 'Part Time', value: 1 }, 
        {label: 'Full Time', value: 2},
        {label: 'Internship', value: 3 },
        {label: 'Temporary', value: 4}, 
        {label: 'Permanent', value: 5},
        {label: 'Contract', value: 6},
        {label: 'Freelance', value: 7},
        ]
    var STyp =[
        {label: 'Select', value: 0 },
        {label: 'Hourly', value: 1 }, 
        {label: 'Weekly', value: 2},
        {label: 'Monthly', value: 3 },
        {label: 'Yearly', value: 4}, 
       
        ]
    var SRange =[
        {label: 'Select', value: 0 },
    {label: '$50,000-$100,000', value: 1 },
    {label: '$200,000-$300,000', value: 2 }, 
    {label: '$300,000-$400,000', value: 3},
    {label: '$400,000-$500,000', value: 4},
    {label: '$500,000-$600,000', value: 5 },
    {label: '$600,000-$700,000', value: 6 },
    {label: '$700,000-$800,000', value: 7}, 
    {label: '$800,000-$900,000', value:8},
    {label: '$900,000-$1,000,000', value: 9},  
    ]
    const openPhoto = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            RNFS.readFile(res.uri, 'base64')
                .then(res1 => {
                    setPhoto("data:" + res.type + ";base64," + res1);
                });


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


            RNFS.readFile(res.uri, 'base64')
                .then(res1 => {
                    setResume("data:" + res.type + ";base64," + res1);
                });


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


            RNFS.readFile(res.uri, 'base64')
                .then(res1 => {
                    setPPhoto("data:" + res.type + ";base64," + res1);
                });

            // setPPhoto(res);

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

    const onPressProfileInfo = () => {
        updatePersonalInfo(Fullname, email, phone, "male", datename, Photo, '0', '0', '0', '0', '0', '0', '0')
    }

    const onPressSkill = () => {
        updateSkills(skills)
    }

    const onPressResume = () => {
        updateResume(Resume)
    }

    const onPressPortfolio = () => {
        updatePortfolio(PPhoto, portfolio)
    }

   
    return (
        <Container>
            <MyHeader navigation={navigation} />
            <Content >

                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: 30, marginLeft: 40 }}>
                        <Text style={styles.text}>Personal Information</Text>
                        <View style={styles.line}>
                        </View>
                    </View>


                    <View style={{ marginTop: 20, alignItems: 'center' }}>

                        <ProfileText nametext="Your Full Name" marginLeftt={-235} />
                        <TextInputLogin value={Fullname} setter={setFullname} label="Write Full Name" />
                        <ProfileText nametext="Email" marginLeftt={-285} />
                        <TextInputLogin value={email} setter={setEmail} label="Write Your Email" />
                        <ProfileText nametext="Phone" marginLeftt={-280} />
                        <TextInputLogin value={phone} setter={setPhone} label="Contact Number Without Space" Ktype='number-pad' />
                        <ProfileText nametext="Date of birth" marginLeftt={-247} />
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>

                            <View style={{
                                height: hp('5%'),
                                width: wp('80%'),
                                borderColor: '#707070',
                                borderWidth: 0.5,
                                borderRadius: 5,
                                fontSize: 12,
                                padding: 10,
                                marginBottom: 15,
                                alignSelf: 'center', flexDirection: 'row',
                                marginLeft:-11
                            }}>
                                <TouchableOpacity

                                    onPress={() => DateModal()}>
                                    <Text style={{

                                        color: '#707070'
                                    }}>{datename}</Text>

                                </TouchableOpacity>


                            </View>
                            <View style={{ marginLeft:-30,marginTop:10}}>
                            <TouchableOpacity onPress={() => DateModal()}>
                                <Icon name="calendar" size={20} color="#707070" style={{ alignSelf: 'center' }} /></TouchableOpacity>
                         </View>
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
                                    alignSelf: 'center'
                                }}>
                                 

                                    <DatePicker style={{ marginHorizontal: '10%' }}
                                        date={date}
                                        mode="date"
                                        style={{
                                            width: wp('50%'),
                                            marginTop: '3%',
                                            marginLeft: '20%'
                                        }}

                                       
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
                        <View style={{
                            height: hp('5%'),
                            width: wp('80%'),
                            borderColor: '#707070',
                            borderWidth: 0.5,
                            borderRadius: 5,
                            fontSize: 12,
                            padding: 10,
                            marginBottom: 15,
                            alignSelf: 'center', flexDirection: 'row'
                        }}>
                            <TouchableOpacity onPress={() => openPhoto()}
                                style={{
                                    borderColor: '#707070',
                                    backgroundColor: '#E4E4E4', width: 90,

                                }}>
                                <Text style={{ textAlign: 'center' }}>
                                    Choose File
                    </Text>
                            </TouchableOpacity>
                            
                            {
                            Photo=== ''?
                            <Text style={{ paddingHorizontal: '5%', color: '#707070' }}>
                                No File Chosen
                            </Text>:<Text style={{ paddingHorizontal: '5%', color: '#707070' }}>
                                Image Added
                            </Text>
                            }
                        </View>
                        <ProfileText nametext="Experience" marginLeftt={-255} />
                        <DropDownPicker
                                items={Exp}
                                itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                                placeholder={'Select'}
                                placeholderStyle={{color:'#707070',fontSize:12}}
                                arrowSize={20}
                                arrowColor={'#47525E'}
                                containerStyle={{height: 40,  width:wp('80%'),}}
                                style={{backgroundColor: '#fffff',borderColor:'#707070',alignSelf:'center',borderRadius:5,borderWidth:0.5,}}
                                dropDownStyle={{backgroundColor: '#ffffff'}}
                            />
                  

                        <ProfileText nametext="Level" marginLeftt={-285} />
                        <DropDownPicker
                                items={Level}
                                itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                                placeholder={'Select'}
                                placeholderStyle={{color:'#707070',fontSize:12}}
                                arrowSize={20}
                                arrowColor={'#47525E'}
                                containerStyle={{height: 40,  width:wp('80%'),}}
                                style={{backgroundColor: '#fffff',borderColor:'#707070',alignSelf:'center',borderRadius:5,borderWidth:0.5,}}
                                dropDownStyle={{backgroundColor: '#ffffff'}}
                            />
                       
                        <ProfileText nametext="Qualification" marginLeftt={-250} />
                        <DropDownPicker
                                items={Qual}
                                itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                                placeholder={'Select'}
                                placeholderStyle={{color:'#707070',fontSize:12}}
                                arrowSize={20}
                                arrowColor={'#47525E'}
                                containerStyle={{height: 40,  width:wp('80%'),}}
                                style={{backgroundColor: '#fffff',borderColor:'#707070',alignSelf:'center',borderRadius:5,borderWidth:0.5,}}
                                dropDownStyle={{backgroundColor: '#ffffff'}}
                            />
                       
                        <ProfileText nametext="Type" marginLeftt={-290} />
                        <DropDownPicker
                                items={Typ}
                                itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                                placeholder={'Select'}
                                placeholderStyle={{color:'#707070',fontSize:12}}
                                arrowSize={20}
                                arrowColor={'#47525E'}
                                containerStyle={{height: 40,  width:wp('80%'),}}
                                style={{backgroundColor: '#fffff',borderColor:'#707070',alignSelf:'center',borderRadius:5,borderWidth:0.5,}}
                                dropDownStyle={{backgroundColor: '#ffffff'}}
                            />
                        
                        <ProfileText nametext="Salary Type" marginLeftt={-255} />
                        <DropDownPicker
                                items={STyp}
                                itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                                placeholder={'Select'}
                                placeholderStyle={{color:'#707070',fontSize:12}}
                                arrowSize={20}
                                arrowColor={'#47525E'}
                                containerStyle={{height: 40,  width:wp('80%'),}}
                                style={{backgroundColor: '#fffff',borderColor:'#707070',alignSelf:'center',borderRadius:5,borderWidth:0.5,}}
                                dropDownStyle={{backgroundColor: '#ffffff'}}
                            />
                       
                        <ProfileText nametext="Salary Range" marginLeftt={-245} />
                        <DropDownPicker
                                items={SRange}
                                itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                                placeholder={'Select'}
                                placeholderStyle={{color:'#707070',fontSize:12}}
                                arrowSize={20}
                                arrowColor={'#47525E'}
                                containerStyle={{height: 40,  width:wp('80%'),}}
                                style={{backgroundColor: '#fffff',borderColor:'#707070',alignSelf:'center',borderRadius:5,borderWidth:0.5,}}
                                dropDownStyle={{backgroundColor: '#ffffff'}}
                            />
                      
                        <View style={{marginLeft:-238}}>
                        <ButtonP Bwidth={ wp('20%')} NameButton="Save" buttonAction={onPressProfileInfo} />
                        </View>
                    </View>

                    <View style={{ marginTop: 30, marginLeft: 40 }}>
                        <Text style={styles.text}>Skills</Text>
                        <View style={styles.line} />
                    </View>
                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                        <ProfileText nametext="Select Skills" marginLeftt={-250} />
                        <Tags

                            textInputProps={{
                                placeholder: "skills"
                            }}
                            initialTags={skills}
                            onChangeTags={tags => setSkills(tags)}
                            onTagPress={(index, tagLabel, event, deleted) =>
                                console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                            }
                            inputStyle={{ backgroundColor: "white" }}
                            containerStyle={{ justifyContent: "center" }}
                            style={{
                                flex: 1, flexDirection: 'row',
                                width: wp('80%'),
                                borderColor: '#707070',
                                borderWidth: 0.5,
                                borderRadius: 5,
                                fontSize: 12,


                            }}

                        />


                        <View style={{marginLeft:-238}}>
                        <ButtonP Bwidth={ wp('20%')}  NameButton="Save Skills" buttonAction={onPressSkill} />
                        </View>
                    </View>

                </View>


                <View style={{ marginTop: 30, marginLeft: 40 }}>
                    <Text style={styles.text}>Resume</Text>
                    <View style={styles.line} />
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <ProfileText nametext="Select Resume" marginLeftt={-235} />
                    <View style={{
                        height: hp('5%'),
                        width: wp('80%'),
                        borderColor: '#707070',
                        borderWidth: 0.5,
                        borderRadius: 5,
                        fontSize: 12,
                        padding: 10,
                        marginBottom: 15,
                        alignSelf: 'center', flexDirection: 'row'
                    }}>
                        <TouchableOpacity onPress={() => openResume()}
                            style={{
                                borderColor: '#707070',
                                backgroundColor: '#E4E4E4', width: 90,

                            }}>
                            <Text style={{ textAlign: 'center' }}>
                                Choose File
                    </Text>
                        </TouchableOpacity>
                        {
                            Photo=== ''?
                            <Text style={{ paddingHorizontal: '5%', color: '#707070' }}>
                                No File Chosen
                            </Text>:<Text style={{ paddingHorizontal: '5%', color: '#707070' }}>
                                Resume Added
                            </Text>
                            }
                    </View>
                    <View style={{marginLeft:-200}}>
                    <ButtonP Bwidth={ wp('30%')} NameButton="Save Resume" buttonAction={onPressResume} />
                    </View>
                </View>

                <View style={{ marginTop: 30, marginLeft: 40 }}>
                    <Text style={styles.text}>Portfolio</Text>
                    <View style={styles.line} />
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <ProfileText nametext="Add Description of your projects" marginLeftt={-140} />
                    <TextInputLogin value={portfolio} setter={setPortfolio} />
                    <ProfileText nametext="Add Photos of your projects" marginLeftt={-165} />
                    <View style={{
                        height: hp('5%'),
                        width: wp('80%'),
                        borderColor: '#707070',
                        borderWidth: 0.5,
                        borderRadius: 5,
                        fontSize: 12,
                        padding: 10,
                        marginBottom: 15,
                        alignSelf: 'center', flexDirection: 'row'
                    }}>
                        <TouchableOpacity onPress={() => openPPhoto()}
                            style={{
                                borderColor: '#707070',
                                backgroundColor: '#E4E4E4', width: 90,

                            }}>
                            <Text style={{ textAlign: 'center' }}>
                                Choose File
                    </Text>
                        </TouchableOpacity>
                        {
                            Photo=== ''?
                            <Text style={{ paddingHorizontal: '5%', color: '#707070' }}>
                                No File Chosen
                            </Text>:<Text style={{ paddingHorizontal: '5%', color: '#707070' }}>
                                Photo Added
                            </Text>
                            }
                    </View>
                    <View style={{marginLeft:-200}}>
                    <ButtonP Bwidth={ wp('30%')} NameButton="Save Portfolio" buttonAction={onPressPortfolio} />
                    </View>
                </View>



            </Content>
            <CandidateTab navigation={navigation} First={'#009961'} Second={'#E4E4E4'} Third={'#E4E4E4'} Fourth={'#E4E4E4'} Fifth={'#E4E4E4'} />
        </Container>
    )
}

const styles = StyleSheet.create({

    text: {
        color: '#707070',
        fontSize: 20
    },
    line: {
        height: 5,
        width: wp('11%'),
        backgroundColor: '#009961',
        borderColor: '#707070',
        borderWidth: 2,
        marginTop: 10
    },

})

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = { updatePersonalInfo, updateSkills, updateResume, updatePortfolio }

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);