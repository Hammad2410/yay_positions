import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Button, Modal, TextInput, ActivityIndicator } from 'react-native';
import { Content, Container, Tabs, Tab } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';
import ProfileText from '../Components/ProfileText';
import EmployerTab from '../Components/EmployerTab';
import { createJob } from '../redux/actions/employer';
import { connect } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';

const CreateJob = ({ navigation, employer, createJob }) => {

    const [title, setTitle] = useState('');
    const [level, setLevel] = useState('');
    const [experience, setExperience] = useState('');
    const [qualification, setQualification] = useState('');
    const [jobType, setJobType] = useState('');
    const [salaryType, setSalaryType] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [detail, setDetail] = useState('');
    const [location, setLocation] = useState('');
    const [remoteOrInHouse, setRemoteOrInHouse] = useState('');
    const [salaryRange, setSalaryRange] = useState('');

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
    var Remote =[
        {label: 'Select', value: 0 },
    {label: 'In House', value: 1 },
    {label: 'Remote', value: 2 }, 
    ]
    var Skills =[
        {label: 'Select', value: 0, },
    {label: 'Analytical Skills', value:1, },
    {label: 'Application Development', value: 2, }, 
    {label: 'Architecture', value: 3,},
    {label: 'Arts', value: 4,},
    {label: 'Communication Skills', value: 5, },
    {label: 'Cooking', value: 6, },
    {label: 'Culinary Arts', value: 7,}, 
    {label: 'Data Network', value: 8,},
    {label: 'Designing', value: 9,},  
    {label: 'Development', value: 10,},
    {label: 'Education', value: 11,}, 
    {label: 'Flexibility', value: 12,},  
    {label: 'Food Products', value: 13,}, 
    {label: 'IT Engineering', value: 14,}, 
    {label: 'JS', value: 15,}, 
    {label: 'Managment', value: 16,}, 
    {label: 'Medical and Healthcare', value: 17,},
    {label: 'Modeling', value: 18,},
    {label: 'Office Managment', value: 19},
    {label: 'Painting', value: 20},
    {label: 'Patience', value: 21},
    {label: 'Php', value: 22}, 
    {label: 'Problem Solving', value: 23},
    {label: 'SEO', value: 24},
    {label: 'SMM', value: 25},
    {label: 'Stress Managment', value: 26,},
    {label: 'Team Managment', value: 27,},
    {label: 'Team Work', value: 28,},
    {label: 'Technical', value: 29,},
    {label: 'Trainings', value: 30,},             
    ]
    return (
        <Container>
            <MyHeader navigation={navigation} />
            <Content >

                <View style={{ flex: 1 }}>
                    <View style={{ marginLeft: 40 }}>
                        <Text style={styles.text}>Create Job</Text>
                        <View style={styles.line}>
                        </View>
                    </View>


                    <View style={{ marginTop: 10, alignItems: 'center' }}>

                        <ProfileText nametext="Title" marginLeftt={-290} />
                        <TextInputLogin label="Title" value={title} setter={setTitle} />
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
                                //    defaultValue={Level}
                                // onChangeItem={item => setLevel(item.value)}
                            />
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
                        <ProfileText nametext="Qualification" marginLeftt={-245} />
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
                        <ProfileText nametext="Job Type" marginLeftt={-265} />
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
                        <ProfileText nametext="Salary Type" marginLeftt={-252} />
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
                        <ProfileText nametext="Location" marginLeftt={-267} />
                        <TextInputLogin label="Location" value={location} setter={setLocation} />
                        <ProfileText nametext="Remote or Inhouse" marginLeftt={-212} />
                        <DropDownPicker
                                items={Remote}
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
                             <ProfileText nametext="Select Skills" marginLeftt={-250} />
                        <DropDownPicker
                                items={Skills}
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
                        {/* <ProfileText nametext="Select Skills" marginLeftt={-248} />
                        <TextInputLogin label="Test" value={} setter={setTitle}/> */}
                        <ProfileText nametext="Job Description" marginLeftt={-230} />
                        <TextInput placeholder="Job Description" placeholderTextColor='#707070' value={jobDescription} style={styles.textinput}
                            onChangeText={(text) => setJobDescription(text)}
                        ></TextInput>
                        <ProfileText nametext="Details" marginLeftt={-278} />
                        <TextInput placeholder="Details" placeholderTextColor='#707070' style={styles.textinput}
                            onChangeText={(text) => setDetail(text)}
                        ></TextInput>
                        <Text style={{ alignSelf: 'center', color: 'red' }}>{employer.error}</Text>
                        {!employer.loading ?  <TouchableOpacity style={styles.button} onPress={() => createJob(title, level, experience, qualification, jobType, salaryType, salaryRange, jobDescription, detail, location, remoteOrInHouse)} >
                            <View >

                                <Text style={{ textAlign: 'center', marginTop: 5, color: '#009961', fontWeight: 'bold' }} >Create Job</Text>
                            </View>
                        </TouchableOpacity> : <ActivityIndicator size={"large"} color={'#009961'} />}
                    </View>

                </View>

            </Content>
            <EmployerTab navigation={navigation} EFirst={'#E4E4E4'} ESecond={'#009961'} EThird={'#E4E4E4'} EFourth={'#E4E4E4'} EFifth={'#E4E4E4'} />
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

    textinput: {
        height: hp('15%'),
        width: wp('80%'),
        borderColor: '#707070',
        borderWidth: 0.5,
        borderRadius: 5,
        fontSize: 12,
        padding: 10,
        textAlignVertical: 'top'

    },
    button: {
        height: hp('4%'),
        width: wp('25%'),
        borderColor: '#009961',
        borderWidth: 0.5,
        borderRadius: 5,
        alignContent: 'center',
        marginBottom: 15,
        // marginLeft: -158,
        marginTop: 30,
        marginLeft:-215
        
    },

})

const mapStateToProps = ({ employer }) => ({ employer })

const mapDispatchToProps = { createJob }

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);