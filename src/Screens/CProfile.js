import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import MyHeader from '../Components/LoginSignupHeader'
import Profile from '../Components/CProfile'
import EmployerTab from '../Components/EmployerTab'
import Icons from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { markFavorite, sendInvite } from '../redux/actions/employer'

const CProfile = ({ navigation, employer, markFavorite, sendInvite }) => {

    return (
        <Container style={{ backgroundColor: 'white' }} >
            <MyHeader navigation={navigation} />
            <Content >

                <View style={{ flex: 1 }}>
                    <View style={{ marginLeft: 25 }}>
                        <Text style={styles.text}>Candidate Profile</Text>
                        <View style={styles.line}>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <View style={styles.textinput}>

                                <Text style={{ textAlign: 'center', marginTop: 5 }} >Invited</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ alignItems: 'flex-end', marginTop: 5, marginLeft: 80 }}>

                                <Icons color={'#001F3F'} name={'square-o'} size={35}></Icons>
                                <Icons color={'green'} name={'heart-o'} size={15} style={{ marginTop: -27, marginRight: 6.5 }}></Icons>

                            </View>
                        </TouchableOpacity>
                    </View>


                    <Profile bottom={10} navigation={navigation} />
                </View>
            </Content>
            <EmployerTab navigation={navigation} EFirst={'#E4E4E4'} ESecond={'#E4E4E4'} EThird={'#E4E4E4'} EFourth={'#009961'} EFifth={'#E4E4E4'} />
        </Container>
    )
}


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
        marginTop: 10
    },
    text1: {
        fontSize: 12,
        color: 'black',
        fontFamily: 'Segoe UI',
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingRight: 5,
        paddingTop: 15

    },
    text2: {
        fontSize: 12,
        color: 'black',
        fontFamily: 'Segoe UI',
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 15

    },
    text3: {
        fontSize: 12,
        color: 'black',
        fontFamily: 'Segoe UI',
        fontWeight: 'bold',
        marginLeft: 50,
        paddingRight: 5,
        paddingTop: 15

    },
    input: {
        width: wp('22%'),
        height: 35,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        borderColor: '#707070',
        fontSize: 10

    },
    text4: {
        fontSize: 12,
        color: '#666666',
        fontFamily: 'Segoe UI',
        marginLeft: 20,
        paddingTop: 15

    },
    text5: {
        fontSize: 12,
        color: '#666666',
        fontFamily: 'Segoe UI',
        marginLeft: 80,
        paddingTop: 15

    },
    text6: {
        fontSize: 12,
        color: '#666666',
        fontFamily: 'Segoe UI',
        paddingTop: 15

    },
    textinput: {
        height: hp('4%'),
        width: wp('20%'),
        flex: 1,
        borderColor: '#707070',
        borderWidth: 0.5,
        borderRadius: 5,
        alignContent: 'center',
        marginBottom: 15,
        marginLeft: 100,
        marginTop: 5

    },


})

const mapStateToProps = ({ employer }) => ({ employer })

const mapDispatchToProps = { markFavorite, sendInvite }

export default connect(mapStateToProps, mapDispatchToProps)(CProfile);