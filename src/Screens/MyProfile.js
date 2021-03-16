import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import MyHeader from '../Components/LoginSignupHeader'
import Profile from '../Components/Profile'
import CandidateTab from '../Components/CandidateTab';

const MyProfile = ({ navigation }) => {

    return (
        <Container style={{ backgroundColor: 'white' }} >
            <MyHeader navigation={navigation} />
            <Content >
                <View style={{ flex: 1 }}>
                    <View style={{ marginLeft: 25 }}>
                        <Text style={styles.text}>My Profile</Text>
                        <View style={styles.line}>
                        </View>
                        <Text style={[styles.text, {
                            color: '#009961',
                            fontSize: 15, marginTop: 10
                        }]}>Kindly visit our website to update your Profile</Text>
                    </View>


                    <Profile bottom={10} />
                </View>
            </Content>
            <CandidateTab navigation={navigation} First={'#009961'} Second={'#E4E4E4'} Third={'#E4E4E4'} Fourth={'#E4E4E4'} Fifth={'#E4E4E4'} />
        </Container>
    )
}
export default MyProfile;

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
        //fontFamily: 'Segoe UI',
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingRight: 5,
        paddingTop: 15

    },
    text2: {
        fontSize: 12,
        color: 'black',
        //fontFamily: 'Segoe UI',
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 15

    },
    text3: {
        fontSize: 12,
        color: 'black',
        //fontFamily: 'Segoe UI',
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
        //fontFamily: 'Segoe UI',
        marginLeft: 20,
        paddingTop: 15

    },
    text5: {
        fontSize: 12,
        color: '#666666',
        //fontFamily: 'Segoe UI',
        marginLeft: 80,
        paddingTop: 15

    },
    text6: {
        fontSize: 12,
        color: '#666666',
        //fontFamily: 'Segoe UI',
        paddingTop: 15

    },


})