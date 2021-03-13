import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Button, Modal, TextInput, ActivityIndicator } from 'react-native';
import { Content, Container, Tabs, Tab } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';
import ProfileText from '../Components/ProfileText';
import EmployerTab from '../Components/EmployerTab';
import { createJob, resetModal } from '../redux/actions/employer';
import { connect } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import ErrorModal from '../Components/ErrorModal';


const CreateJob = ({ navigation, employer, createJob, resetModal }) => {

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
    const [skill, setSkill] = useState('');


    var Exp = [
        { label: 'Select', value: 'Select', },
        { label: '1 year', value: '1 year', },
        { label: '2 years', value: '2 years', },
        { label: '3 years', value: '3 years', },
        { label: '4 years', value: '4 years', },
        { label: '5 years', value: '5 years', },
        { label: '6 years', value: '6 years', },
        { label: '7 years', value: '7 years', },
        { label: '8 years', value: '8 years', },
        { label: '9 years', value: '9 years', },
        { label: '10 years', value: '10 years', },
        { label: '10+years', value: '10+years', },
    ]
    var Level = [
        { label: 'Select', value: 'Select', },
        { label: 'Fresh', value: 'Fresh', },
        { label: 'Student', value: 'Student' },
        { label: 'Skilled Worker', value: 'Skilled Worker' },
        { label: 'Semi Skilled Worker', value: 'Semi Skilled Worker' },
        { label: 'Executive', value: 'Executive' },
        { label: 'Officer', value: 'Officer' },
        { label: 'Specialist', value: 'Specialist' },
        { label: 'Manager', value: 'Manager' },
        { label: 'Professional', value: 'Professional' },]

    var Qual = [
        { label: 'Select', value: 'Select', },
        { label: 'High School', value: 'High School', },
        { label: 'Bachelor', value: 'Bachelor', },
        { label: 'Master', value: 'Master', },
        { label: 'Doctorate', value: 'Doctorate', },
        { label: 'Diploma', value: 'Diploma', },
        { label: 'MBBS', value: 'MBBS', },
    ]
    var Typ = [
        { label: 'Select', value: 'Select' },
        { label: 'Part Time', value: 'Part Time' },
        { label: 'Full Time', value: 'Full Time' },
        { label: 'Internship', value: 'Internship' },
        { label: 'Temporary', value: 'Temporary' },
        { label: 'Permanent', value: 'Permanent' },
        { label: 'Contract', value: 'Contract' },
        { label: 'Freelance', value: 'Freelance' },
    ]
    var STyp = [
        { label: 'Select', value: 'Select' },
        { label: 'Hourly', value: 'Hourly' },
        { label: 'Weekly', value: 'Weekly' },
        { label: 'Monthly', value: 'Monthly' },
        { label: 'Yearly', value: 'Yearly' },

    ]
    var SRange = [
        { label: 'Select', value: 'Select' },
        { label: '$50,000-$100,000', value: '$50,000-$100,000' },
        { label: '$200,000-$300,000', value: '$200,000-$300,000' },
        { label: '$300,000-$400,000', value: '$300,000-$400,000' },
        { label: '$400,000-$500,000', value: '$400,000-$500,000' },
        { label: '$500,000-$600,000', value: '$500,000-$600,000' },
        { label: '$600,000-$700,000', value: '$600,000-$700,000' },
        { label: '$700,000-$800,000', value: '$700,000-$800,000' },
        { label: '$800,000-$900,000', value: '$800,000-$900,000' },
        { label: '$900,000-$1,000,000', value: '$900,000-$1,000,000' },
    ]
    var Remote = [
        { label: 'Select', value: 'Select' },
        { label: 'In House', value: 'In House' },
        { label: 'Remote', value: 'Remote' },
    ]
    var Skills = [
        { label: 'Select', value: 'Select', },
        { label: 'Analytical Skills', value: 'Analytical Skills', },
        { label: 'Application Development', value: 'Application Development', },
        { label: 'Architecture', value: 'Architecture', },
        { label: 'Arts', value: 'Arts', },
        { label: 'Communication Skills', value: 'Communication Skills', },
        { label: 'Cooking', value: 'Cooking', },
        { label: 'Culinary Arts', value: 'Culinary Arts', },
        { label: 'Data Network', value: 'Data Network', },
        { label: 'Designing', value: 'Designing', },
        { label: 'Development', value: 'Development', },
        { label: 'Education', value: 'Education', },
        { label: 'Flexibility', value: 'Flexibility', },
        { label: 'Food Products', value: 'Food Products', },
        { label: 'IT Engineering', value: 'IT Engineering', },
        { label: 'JS', value: 'JS', },
        { label: 'Managment', value: 'Managment', },
        { label: 'Medical and Healthcare', value: 'Medical and Healthcare', },
        { label: 'Modeling', value: 'Modeling', },
        { label: 'Office Managment', value: 'Office Managment' },
        { label: 'Painting', value: 'Painting' },
        { label: 'Patience', value: 'Patience' },
        { label: 'Php', value: 'Php' },
        { label: 'Problem Solving', value: 'Problem Solving' },
        { label: 'SEO', value: 'SEO' },
        { label: 'SMM', value: 'SMM' },
        { label: 'Stress Managment', value: 'Stress Managment', },
        { label: 'Team Managment', value: 'Team Managment', },
        { label: 'Team Work', value: 'Team Work', },
        { label: 'Technical', value: 'Technical', },
        { label: 'Trainings', value: 'Trainings', },
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
                            placeholderStyle={{ color: '#707070', fontSize: 12 }}
                            arrowSize={20}
                            arrowColor={'#47525E'}
                            containerStyle={{ height: 40, width: wp('80%'), }}
                            style={{ backgroundColor: '#fffff', borderColor: '#707070', alignSelf: 'center', borderRadius: 5, borderWidth: 0.5, }}
                            dropDownStyle={{ backgroundColor: '#ffffff' }}
                            //    defaultValue={Level}
                            onChangeItem={item => setLevel(item.value)}
                        />
                        <ProfileText nametext="Experience" marginLeftt={-255} />
                        <DropDownPicker
                            items={Exp}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            placeholder={'Select'}
                            placeholderStyle={{ color: '#707070', fontSize: 12 }}
                            arrowSize={20}
                            arrowColor={'#47525E'}
                            containerStyle={{ height: 40, width: wp('80%'), }}
                            style={{ backgroundColor: '#fffff', borderColor: '#707070', alignSelf: 'center', borderRadius: 5, borderWidth: 0.5, }}
                            dropDownStyle={{ backgroundColor: '#ffffff' }}
                            onChangeItem={item => setExperience(item.value)}
                        />
                        <ProfileText nametext="Qualification" marginLeftt={-245} />
                        <DropDownPicker
                            items={Qual}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            placeholder={'Select'}
                            placeholderStyle={{ color: '#707070', fontSize: 12 }}
                            arrowSize={20}
                            arrowColor={'#47525E'}
                            containerStyle={{ height: 40, width: wp('80%'), }}
                            style={{ backgroundColor: '#fffff', borderColor: '#707070', alignSelf: 'center', borderRadius: 5, borderWidth: 0.5, }}
                            dropDownStyle={{ backgroundColor: '#ffffff' }}
                            onChangeItem={item => setQualification(item.value)}

                        />
                        <ProfileText nametext="Job Type" marginLeftt={-265} />
                        <DropDownPicker
                            items={Typ}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            placeholder={'Select'}
                            placeholderStyle={{ color: '#707070', fontSize: 12 }}
                            arrowSize={20}
                            arrowColor={'#47525E'}
                            containerStyle={{ height: 40, width: wp('80%'), }}
                            style={{ backgroundColor: '#fffff', borderColor: '#707070', alignSelf: 'center', borderRadius: 5, borderWidth: 0.5, }}
                            dropDownStyle={{ backgroundColor: '#ffffff' }}
                            onChangeItem={item => setJobType(item.value)}
                        />
                        <ProfileText nametext="Salary Type" marginLeftt={-252} />
                        <DropDownPicker
                            items={STyp}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            placeholder={'Select'}
                            placeholderStyle={{ color: '#707070', fontSize: 12 }}
                            arrowSize={20}
                            arrowColor={'#47525E'}
                            containerStyle={{ height: 40, width: wp('80%'), }}
                            style={{ backgroundColor: '#fffff', borderColor: '#707070', alignSelf: 'center', borderRadius: 5, borderWidth: 0.5, }}
                            dropDownStyle={{ backgroundColor: '#ffffff' }}
                            onChangeItem={item => setSalaryType(item.value)}
                        />
                        <ProfileText nametext="Salary Range" marginLeftt={-245} />
                        <DropDownPicker
                            items={SRange}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            placeholder={'Select'}
                            placeholderStyle={{ color: '#707070', fontSize: 12 }}
                            arrowSize={20}
                            arrowColor={'#47525E'}
                            containerStyle={{ height: 40, width: wp('80%'), }}
                            style={{ backgroundColor: '#fffff', borderColor: '#707070', alignSelf: 'center', borderRadius: 5, borderWidth: 0.5, }}
                            dropDownStyle={{ backgroundColor: '#ffffff' }}
                            onChangeItem={item => setSalaryRange(item.value)}
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
                            placeholderStyle={{ color: '#707070', fontSize: 12 }}
                            arrowSize={20}
                            arrowColor={'#47525E'}
                            containerStyle={{ height: 40, width: wp('80%'), }}
                            style={{ backgroundColor: '#fffff', borderColor: '#707070', alignSelf: 'center', borderRadius: 5, borderWidth: 0.5, }}
                            dropDownStyle={{ backgroundColor: '#ffffff' }}
                            onChangeItem={item => setRemoteOrInHouse(item.value)}
                        />
                        <ProfileText nametext="Select Skills" marginLeftt={-250} />
                        <DropDownPicker
                            items={Skills}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            placeholder={'Select'}
                            placeholderStyle={{ color: '#707070', fontSize: 12 }}
                            arrowSize={20}
                            arrowColor={'#47525E'}
                            containerStyle={{ height: 40, width: wp('80%'), }}
                            style={{ backgroundColor: '#fffff', borderColor: '#707070', alignSelf: 'center', borderRadius: 5, borderWidth: 0.5, }}
                            dropDownStyle={{ backgroundColor: '#ffffff' }}
                            onChangeItem={item => setSkill(item.value)}
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
                        <ErrorModal message={employer.error} visible={employer.error != ''} onPress={resetModal} />
                        {/* <Text style={{ alignSelf: 'center', color: 'red' }}>{employer.error}</Text> */}
                        {!employer.loading ? <TouchableOpacity style={styles.button} onPress={() => createJob(title, level, experience, qualification, jobType, salaryType, salaryRange, jobDescription, detail, location, remoteOrInHouse)} >
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
        marginLeft: -215

    },

})

const mapStateToProps = ({ employer }) => ({ employer })

const mapDispatchToProps = { createJob, resetModal }

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);