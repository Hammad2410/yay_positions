import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Button, Modal, TextInput, ActivityIndicator } from 'react-native';
import { Content, Container, Tabs, Tab } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';
import ProfileText from '../Components/ProfileText';
import Icon from 'react-native-vector-icons/Feather';
import CandidateTab from '../Components/CandidateTab';
import ButtonP from '../Components/ButtonP';

import DatePicker from 'react-native-date-picker';
import { connect } from 'react-redux';
import { updateJob } from '../redux/actions/candidate';

const JobExper = ({ navigation, candidate, updateJob }) => {

    const [date, setDate] = useState(new Date());
    const [Sdatename, setSDateName] = useState('mm/dd/yy');
    const [datename, setDateName] = useState('mm/dd/yy');
    const [Photo, setPhoto] = useState('');
    const [PPhoto, setPPhoto] = useState('');
    const [Resume, setResume] = useState('');
    const [SDatemodalVisible, setSDateModalVisible] = useState(false);
    const [DatemodalVisible, setDateModalVisible] = useState(false);
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [description, setDescription] = useState('');

    const SDateModal = () => {
        setSDateModalVisible(!SDatemodalVisible)

    }
    const DateModal = () => {
        setDateModalVisible(!DatemodalVisible)

    }

    const onPress = () => {
        updateJob(company, role, Sdatename, datename, description)
    }


    return (
        <Container>
            <MyHeader navigation={navigation} />
            <Content >

                <View style={{ flex: 1 }}>
                    <View style={{ marginLeft: 40 }}>
                        <Text style={styles.text}>Job Experiences</Text>
                        <View style={styles.line}>
                        </View>
                    </View>


                    <View style={{ marginTop: 10, alignItems: 'center' }}>

                        <ProfileText nametext="Company Name" marginLeftt={-230} />
                        <TextInputLogin label="Company Name" value={company} setter={setCompany} />
                        <ProfileText nametext="Your Role" marginLeftt={-265} />
                        <TextInputLogin label="Role" value={role} setter={setRole} />

                        <ProfileText nametext="Start Date" marginLeftt={-260} />
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
                                alignSelf: 'center', flexDirection: 'row'
                            }}>
                                <TouchableOpacity

                                    onPress={() => SDateModal()}>
                                    <Text style={{

                                        color: '#707070'
                                    }}>{Sdatename}</Text>

                                </TouchableOpacity>


                            </View>
                            <TouchableOpacity onPress={() => SDateModal()}>
                                <Icon name="calendar" size={20} color="#707070" style={{ alignSelf: 'center', right: 8, top: 10, position: 'absolute' }} /></TouchableOpacity>
                        </View>
                        <ProfileText nametext="End Date" marginLeftt={-260} />
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
                                alignSelf: 'center', flexDirection: 'row'
                            }}>
                                <TouchableOpacity

                                    onPress={() => DateModal()}>
                                    <Text style={{

                                        color: '#707070'
                                    }}>{datename}</Text>

                                </TouchableOpacity>


                            </View>
                            <TouchableOpacity onPress={() => DateModal()}>
                                <Icon name="calendar" size={20} color="#707070" style={{ alignSelf: 'center', right: 8, top: 10, position: 'absolute' }} /></TouchableOpacity>
                        </View>

                        <ProfileText nametext="Description" marginLeftt={-255} />
                        <TextInput placeholder="Description" value={description} onChangeText={(text) => setDescription(text)} placeholderTextColor='#707070' style={styles.textinput}></TextInput>
                        <Text style={{ alignSelf: 'center', color: 'red' }}>{candidate.error}</Text>

                        {
                            candidate.loading ? <ActivityIndicator size={"large"} color={'#009961'} /> : <ButtonP NameButton="Update Information" buttonAction={onPress} />
                        }
                    </View>
                    <View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={SDatemodalVisible}
                        >
                            <View style={{
                                width: wp('100%'),
                                height: '23%', marginTop: '5%'
                                , backgroundColor: 'white', flexDirection: 'row',
                                position: 'absolute',
                                bottom: 0,
                                alignSelf: 'center'
                            }}>
                                <TouchableOpacity
                                    onPress={() => setSDateModalVisible(false)}

                                    style={{
                                        borderRadius: 5,
                                        alignSelf: 'flex-start',
                                        marginVertical: '3%',
                                        marginHorizontal: '1%',
                                        // marginLeft: '3%',
                                        borderColor: 'grey',
                                        borderWidth: 1, backgroundColor: '#fff',
                                        width: wp('20%'), height: hp('5%')
                                    }}>

                                    <Text style={{
                                        marginTop: 5,
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
                                        setSDateName(date.toString().substr(0, 15))
                                        setSDateModalVisible(false)
                                    }}
                                >

                                    <Text style={{

                                        paddingHorizontal: '24%', paddingVertical: 4, color: 'black'
                                    }}>DONE</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>

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
                                <TouchableOpacity
                                    onPress={() => setDateModalVisible(false)}

                                    style={{
                                        borderRadius: 5,
                                        alignSelf: 'flex-start',
                                        marginVertical: '3%',
                                        marginHorizontal: '1%',
                                        // marginLeft: '3%',
                                        borderColor: 'grey',
                                        borderWidth: 1, backgroundColor: '#fff',
                                        width: wp('20%'), height: hp('5%')
                                    }}>

                                    <Text style={{
                                        marginTop: 5,
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
                </View>


</Content>
<CandidateTab navigation={navigation} First={'#E4E4E4'} Second={'#E4E4E4'} Third={'#E4E4E4'} Fourth={'#E4E4E4'} Fifth={'#E4E4E4'}/>
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


})

const mapStateToProps = ({ candidate }) => ({ candidate })

const mapDispatchToProps = { updateJob }

export default connect(mapStateToProps, mapDispatchToProps)(JobExper);