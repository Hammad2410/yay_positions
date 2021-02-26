import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Content, Container, Tabs, Tab, Footer, Button } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';


const Register = ({ navigation }) => {

    const [role, setRole] = useState('Candidate');

    return (
        <Container style={{ backgroundColor: 'white' }}>
            <MyHeader navigation={navigation} />
            <Content >

                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: 30, marginLeft: 40 }}>
                        <Text style={styles.text}>Register</Text>
                        <View style={styles.line}>
                        </View>
                    </View>
                    <View style={{ height: 200, alignItems: 'center', marginTop: '7%' }}>
                        <TextInputLogin />
                        <TextInputLogin name1="Name" />
                        <View style={styles.switchContainer}>
                            <Button onPress={() => setRole('Candidate')} style={[styles.switchBtn, { backgroundColor: role === 'Candidate' ? '#016742' : '#009961' }]}>
                                <Text style={styles.switchText} >Candidate</Text>
                            </Button>
                            <Button onPress={() => setRole('Employer')} style={[styles.switchBtn, { backgroundColor: role === 'Employer' ? '#016742' : '#009961' }]}>
                                <Text style={styles.switchText}>Employer</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', height: 170 }}>
                        <TextInputLogin name1="Country" />
                        <TextInputLogin value name1="Password" />
                        <TextInputLogin value name1="Confirm Password" />
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntext}>Register</Text>
                    </TouchableOpacity>
                </View>



            </Content>
            <Footer style={{ backgroundColor: '#009961', height: 40 }}>

            </Footer>
        </Container>
    )

}
export default Register;
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
    btn: {
        backgroundColor: '#009961',
        width: wp('40%'),
        height: hp(6),
        marginLeft: '10%',
        borderRadius: 30,
        justifyContent: 'center',

    },
    btntext:
    {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    switchContainer:
    {
        marginVertical: 10,
        width: '80%',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    switchBtn:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    switchText:
    {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 13
    }


})