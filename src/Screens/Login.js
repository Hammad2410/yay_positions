import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Content, Container, Tabs, Tab, Footer, FooterTab, Button } from 'native-base';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';
import CheckBox from '@react-native-community/checkbox';
import { connect } from 'react-redux';
import { login, resetModal } from '../redux/actions/auth';
import ErrorModal from '../Components/ErrorModal';

const Login = ({ login, navigation, auth, resetModal }) => {


    const [role, setRole] = useState('Candidate');
    const [email, setEmail] = useState('ussama.ahmed05@gmail.com');
    const [password, setPassword] = useState('Stronghold 3');
    const [isSelected, setSelection] = useState(false);


    useEffect(() => {

        if (auth.role === 'Employer') {
            navigation.navigate('Employer')
        }
        else if (auth.role === 'Candidate') {
            navigation.navigate('CandidateHome')
        }

    }, [auth.role])

    return (
        <Container>
            <MyHeader navigation={navigation} />
            <Content contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}>

                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: 30, marginLeft: 40 }}>
                        <Text style={styles.text}>Login</Text>
                        <View style={styles.line}>
                        </View>
                    </View>
                    <View style={styles.innerContainer} >
                        <View style={styles.switchContainer}>
                            <Button onPress={() => setRole('Candidate')} style={[styles.switchBtn, { backgroundColor: role === 'Candidate' ? '#016742' : '#009961' }]}>
                                <Text style={styles.switchText} >Candidate</Text>
                            </Button>
                            <Button onPress={() => setRole('Employer')} style={[styles.switchBtn, { backgroundColor: role === 'Employer' ? '#016742' : '#009961' }]}>
                                <Text style={styles.switchText}>Employer</Text>
                            </Button>
                        </View>

                        <TextInputLogin value={email} setter={setEmail} label="Email" />
                        <TextInputLogin value={password} setter={setPassword} label="Password" />

                    </View>
                    {/* <Text style={{ alignSelf: 'center', color: 'red' }}>{auth.error}</Text> */}
                    <ErrorModal message={auth.error} visible={auth.error != ''} onPress={resetModal} />
                    <View style={{ flexDirection: 'row', marginLeft: 35, marginVertical: 8 }}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                        <Text style={{ paddingTop: 5, color: '#707070', fontSize: 12 }}> Remember me?</Text>
                    </View>
                    {
                        auth.loading ? <ActivityIndicator size={"large"} color={'#009961'} /> :
                            <View style={{ flexDirection: 'row', marginLeft: 35 }}>
                                <TouchableOpacity style={styles.btn} onPress={() => login(email, password)}
                                // onPress={() => {
                                //     // if (role === 'Employer') {
                                //     //     navigation.navigate('Employer')
                                //     // }
                                //     // else if (role === 'Candidate') {
                                //     //     navigation.navigate('CandidateHome')
                                //     // }
                                //     // else {
                                //     //     alert('hf')
                                //     // }

                                // }}
                                >
                                    <Text style={styles.btntext}>Login</Text>
                                </TouchableOpacity>


                                <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('Register')}>
                                    <Text style={styles.btntext1}>Register as new user</Text>
                                </TouchableOpacity>
                            </View>
                    }

                </View>
            </Content>
            <Footer style={{ backgroundColor: '#009961', height: 40 }}>

            </Footer>
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
    btn: {
        backgroundColor: '#009961',
        width: wp('30%'),
        height: hp(6),
        borderRadius: 30,
        justifyContent: 'center',
    },
    btn1: {
        backgroundColor: 'white',
        width: wp('50%'),
        height: hp(6),
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#009961',
        justifyContent: 'center',
        marginLeft: 10

    },
    btntext:
    {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 12
    },
    btntext1:
    {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#009961',
        fontWeight: 'bold',
        fontSize: 12
    },

    innerContainer:
    {
        height: 200,
        alignItems: 'center',
        marginTop: '7%'
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

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = { login, resetModal }

export default connect(mapStateToProps, mapDispatchToProps)(Login);