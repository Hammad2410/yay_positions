import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import MyHeader from '../Components/LoginSignupHeader'
import Jobcard from '../Components/Jobcard';
import EmployerTab from '../Components/EmployerTab'
import { connect } from 'react-redux';

const Jobs = ({ navigation, employer }) => {
    return (
        <Container style={{ backgroundColor: 'white' }} >
            <MyHeader navigation={navigation} />
            <Content >
                <View style={{ flex: 1 }}>
                    <View style={{ marginLeft: 40 }}>
                        <Text style={styles.text}>Jobs</Text>
                        <View style={styles.line}>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('CreateJob') }}>
                        <Text style={styles.btntext}>Create Job</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={employer.jobs}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => <Jobcard item={item} />}
                    />
                </View>
            </Content>
<EmployerTab navigation={navigation} EFirst={'#E4E4E4'} ESecond={'#E4E4E4'} EThird={'#E4E4E4'} EFourth={'#009961'} EFifth={'#E4E4E4'}/>
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
    btn: {
        width: wp('20%'),
        height: 40,
        backgroundColor: '#009961',
        borderRadius: 8,
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 18,
        alignSelf: 'flex-end'
    },

    btntext:
    {
        fontFamily: 'Segoe UI',
        fontSize: 11,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold'
    },


})

const mapStateToProps = ({ employer }) => ({ employer })

export default connect(mapStateToProps)(Jobs);