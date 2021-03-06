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
                        <TextInputLogin label="Test" value={title} setter={setTitle} />
                        <ProfileText nametext="Level" marginLeftt={-285} />
                        <TextInputLogin label="Test" value={level} setter={setLevel} />
                        <ProfileText nametext="Experience" marginLeftt={-255} />
                        <TextInputLogin label="Test" value={experience} setter={setExperience} />
                        <ProfileText nametext="Qualification" marginLeftt={-245} />
                        <TextInputLogin label="Test" value={qualification} setter={setQualification} />
                        <ProfileText nametext="Job Type" marginLeftt={-265} />
                        <TextInputLogin label="Test" value={jobType} setter={setJobType} />
                        <ProfileText nametext="Salary Type" marginLeftt={-252} />
                        <TextInputLogin label="Test" value={salaryType} setter={setSalaryType} />
                        <ProfileText nametext="Salary Range" marginLeftt={-245} />
                        <TextInputLogin label="Test" value={salaryRange} setter={setSalaryRange} />
                        <ProfileText nametext="Location" marginLeftt={-267} />
                        <TextInputLogin label="Test" value={location} setter={setLocation} />
                        <ProfileText nametext="Remote or Inhouse" marginLeftt={-212} />
                        <TextInputLogin label="Test" value={remoteOrInHouse} setter={setRemoteOrInHouse} />
                        {/* <ProfileText nametext="Select Skills" marginLeftt={-248} />
                        <TextInputLogin label="Test" value={} setter={setTitle}/> */}
                        <ProfileText nametext="Job Description" marginLeftt={-230} />
                        <TextInput placeholder="Test" placeholderTextColor='#707070' value={jobDescription} style={styles.textinput}
                            onChangeText={(text) => setJobDescription(text)}
                        ></TextInput>
                        <ProfileText nametext="Details" marginLeftt={-278} />
                        <TextInput placeholder="Test" placeholderTextColor='#707070' style={styles.textinput}
                            onChangeText={(text) => setDetail(text)}
                        ></TextInput>
                        <Text style={{ alignSelf: 'center', color: 'red' }}>{employer.error}</Text>
                        {!employer.loading ? <TouchableOpacity onPress={() => createJob(title, level, experience, qualification, jobType, salaryType, salaryRange, jobDescription, detail, location, remoteOrInHouse)} >
                            <View style={styles.button}>

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
        marginTop: 30

    },

})

const mapStateToProps = ({ employer }) => ({ employer })

const mapDispatchToProps = { createJob }

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);