import React, { useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Modal,
    Pressable,
    TextInput,
    ImageBackground
} from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyHeader from './LoginSignupHeader';
import { connect } from 'react-redux';
import {
    sendInvite,
    markFavorite,
    changeCandidateId,
} from '../redux/actions/employer';
import DatePicker from 'react-native-date-picker';
import { BASE_URL } from '../utils/config';

const Candidatecard = ({
    navigation,
    bottom,
    item,
    sendInvite,
    markFavorite,
    employer,
    changeCandidateId,
    auth
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [sentInvite, setSentInvite] = useState(false);
    const [time, setTime] = useState('');
    const [date, setDate] = useState(new Date());
    const [datename, setDateName] = useState('mm/dd/yy');
    const [DatemodalVisible, setDateModalVisible] = useState(false);
    const [packageModalVisible, setPackageModalVisible] = useState(false);

    const DateModal = () => {
        setDateModalVisible(!DatemodalVisible);
    };
    return (
        <ImageBackground style={[styles.view, { marginBottom: bottom }]} imageStyle={{ borderRadius: 16 }} source={item.Image !== null ? { uri: BASE_URL + item.Image } : require('../assests/image/defaultCandidate.jpg')}>
            <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.75)']} style={{ flex: 1, padding: 10, borderRadius: 16 }} start={{ x: 0, y: 0.5 }} end={{ x: 0, y: 1 }} >
                <View style={{ flexDirection: 'row' }}>
                    {/* {!item.InInvited && (
                        <TouchableOpacity
                            disabled={sentInvite}
                            style={styles.btn}
                            onPress={() => {
                                setModalVisible(true);
                            }}>
                            <Text style={styles.btntext}>
                                {sentInvite ? 'Invite Sent' : 'Send Invitation'}
                            </Text>
                        </TouchableOpacity>
                    )} */}
                    <TouchableOpacity
                        style={styles.btn1}
                        onPress={() => {
                            // alert(item.CandidateId)
                            // if (auth.profile.Package != null) {
                            changeCandidateId(item.CandidateId);
                            navigation.navigate('CProfile');
                            // }
                            // else {
                            //     setPackageModalVisible(true);
                            // }

                            // console.log(item)
                        }}>
                        <Text style={styles.btntext}>Details</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: '#FFF', flex: 1, fontWeight: 'bold', fontSize: 24 }}>{item.FullName}</Text>

                        <TouchableOpacity onPress={() => markFavorite(item)}>
                            <View style={{ alignItems: 'flex-end', padding: 10 }}>
                                <Icon color={'#001F3F'} name={'square-o'} size={35}></Icon>
                                <Icon
                                    color={'green'}
                                    name={
                                        employer.favorites.filter(
                                            (item1) => item1.CandidateId == item.CandidateId,
                                        ).length == 0
                                            ? 'heart-o'
                                            : 'heart'
                                    }
                                    size={15}
                                    style={{ marginTop: -27, marginRight: 6.5 }}></Icon>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18 }}>Experience: {item.Experience}</Text>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16 }}>Job Type: {item.JobType}</Text>
                </View>
            </LinearGradient>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={DatemodalVisible}>
                    <View
                        style={{
                            width: wp('100%'),
                            height: '23%',
                            marginTop: '5%',
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            position: 'absolute',
                            bottom: 0,
                            alignSelf: 'center',
                        }}>
                        <DatePicker
                            style={{ marginHorizontal: '10%' }}
                            date={date}
                            androidVariant="nativeAndroid"
                            mode="datetime"
                            minimumDate={new Date()}
                            style={{
                                width: wp('50%'),
                                marginTop: '3%',
                                marginLeft: '20%',
                            }}
                            onDateChange={(date) => setDate(date)}
                        />
                        <TouchableOpacity
                            style={{
                                borderRadius: 5,
                                alignSelf: 'flex-start',
                                justifyContent: 'center',
                                marginVertical: '3%',
                                marginLeft: '3%',
                                borderColor: 'grey',
                                borderWidth: 1,
                                backgroundColor: '#fff',
                                width: wp('22%'),
                                height: hp('5%'),
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                setDateName(date.toString().substr(0, 21));
                                setDateModalVisible(false);
                            }}>
                            <Text style={{}}>DONE</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <Modal
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Date Time for call</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View
                                    style={{
                                        height: hp('5%'),
                                        width: wp('60%'),
                                        borderColor: '#707070',
                                        borderWidth: 0.5,
                                        borderRadius: 5,
                                        fontSize: 12,
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                    }}>
                                    <TouchableOpacity onPress={() => DateModal()}>
                                        <Text
                                            style={{
                                                color: '#707070',
                                                marginLeft: '5%',
                                            }}>
                                            {datename}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={{
                                        marginLeft: -30,
                                    }}>
                                    <TouchableOpacity onPress={() => DateModal()}>
                                        <Icon
                                            name="calendar"
                                            size={20}
                                            color="#707070"
                                            style={{ alignSelf: 'center' }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: 25,
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                <Pressable
                                    style={[
                                        styles.button,
                                        {
                                            backgroundColor: '#EA3A3A',
                                            marginLeft: -12,
                                            alignItems: 'center',
                                        },
                                    ]}
                                    onPress={() => {
                                        setSentInvite(true);
                                        sendInvite(item.CandidateId, datename);
                                        setModalVisible(!modalVisible);
                                    }}>
                                    <Text style={styles.textStyle}>Send Invitation</Text>
                                </Pressable>
                                <Pressable
                                    style={[
                                        styles.button,
                                        { backgroundColor: '#007AFF', marginRight: -10 },
                                    ]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={packageModalVisible}>
                    <View
                        style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{ fontSize: 27, color: 'black', fontWeight: '600', textAlign: 'center' }}>Viewed</Text>
                            <Text style={styles.modalText}>Please upgrade to see more profiles</Text>
                            <TouchableOpacity
                                style={{
                                    borderRadius: 5,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    marginVertical: '3%',
                                    marginLeft: '3%',
                                    backgroundColor: '#7cd1f9',
                                    width: wp('22%'),
                                    height: hp('5%'),
                                    alignItems: 'center',
                                }}
                                onPress={() => {

                                    setPackageModalVisible(false);
                                }}>
                                <Text style={{ color: "#FFF" }}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#707070',
        fontSize: 20,
    },
    line: {
        height: 5,
        width: wp('11%'),
        backgroundColor: '#009961',
        borderColor: '#707070',
        borderWidth: 2,
        marginTop: 10,
    },
    text1: {
        fontSize: 13,
        color: '#009961',
        //fontFamily: 'Segoe UI',

    },
    view: {
        height: hp('65%'),
        alignSelf: 'center',
        width: wp('90%'),
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 12,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        marginHorizontal: wp('5%'),

    },
    view1: {
        width: wp('38%'),
        // height: 320,
        backgroundColor: '#001F3F',
        borderBottomLeftRadius: 12,
        borderTopLeftRadius: 12,
        marginLeft: 10,
        marginVertical: 14,
    },
    text2: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#FFFFFF',
        //fontFamily: 'Segoe UI',
        padding: 20
    },
    view2: {
        width: wp('40%'),
        height: 320,
        backgroundColor: 'white',
        borderBottomLeftRadius: 12,
        borderTopLeftRadius: 12,
        marginLeft: 10,
        marginVertical: 14,
    },
    text3: {
        fontSize: 13,
        color: '#000000',
        //fontFamily: 'Segoe UI',
        paddingVertical: 20,
        textAlign: 'right',
    },
    btn: {
        width: wp('25%'),
        height: 30,
        backgroundColor: '#1492E6',
        borderRadius: 8,
        justifyContent: 'center',
        marginVertical: 10,
        marginRight: 5,
    },
    btn1: {
        width: wp('19%'),
        height: 30,
        backgroundColor: '#17A2B8',
        borderRadius: 8,
        justifyContent: 'center',
        marginVertical: 10,
    },
    btntext:
    {
        //fontFamily: 'Segoe UI',
        fontSize: 11,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',

        alignSelf: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        padding: 35,
        height: '25%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },

    buttonClose: {
        backgroundColor: 'rgba(0,54,168,1)',
    },
    textStyle: {
        color: 'white',
        fontWeight: '400',
        textAlign: 'center',

        fontSize: 16,
    },
    modalText: {
        alignSelf: 'center',
        fontSize: 16,
        color: 'black',
        fontWeight: '400',

        textAlign: 'center',
        marginBottom: 5,
    },
    modalInput: {
        height: hp('5%'),
        width: wp('60%'),
        borderColor: '#707070',
        borderWidth: 0.5,
        borderRadius: 5,
        fontSize: 12,
        padding: 10,
        marginTop: 10,
        alignSelf: 'center',
    },
});

const mapStateToProps = ({ employer, auth }) => ({ employer, auth });

const mapDispatchToProps = { sendInvite, markFavorite, changeCandidateId };

export default connect(mapStateToProps, mapDispatchToProps)(Candidatecard);
