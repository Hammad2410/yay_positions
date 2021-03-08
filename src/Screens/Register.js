import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Content, Container, Tabs, Tab, Footer, Button } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyHeader from '../Components/LoginSignupHeader';
import TextInputLogin from '../Components/TextInput';
import { connect } from 'react-redux';
import { register, resetUserRegistered } from '../redux/actions/auth';


const Register = (props) => {

    const [role, setRole] = useState('Candidate');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <Container style={{ backgroundColor: 'white' }}>
            <MyHeader navigation={props.navigation} />
            <Content >

                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: 30, marginLeft: 40 }}>
                        <Text style={styles.text}>Register</Text>
                        <View style={styles.line}>
                        </View>
                    </View>
                    <View style={{ height: 200, alignItems: 'center', marginTop: '7%' }}>
                        <TextInputLogin value={email} setter={setEmail} label="Email" />
                        <TextInputLogin label="Name" value={name} setter={setName} />
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
                        <TextInputLogin label="Country" value={country} setter={setCountry} />
                        <TextInputLogin value label="Password" value={password} setter={setPassword} />
                        <TextInputLogin value label="Confirm Password" value={confirmPassword} setter={setConfirmPassword} />
                    </View>
                    <Text style={{ alignSelf: 'center', color: 'red' }}>{props.auth.error}</Text>
                    {
                        props.auth.loading ? <ActivityIndicator size={"large"} color={'#009961'} /> : <TouchableOpacity style={styles.btn} onPress={() => props.register(email, name, country, role, password, confirmPassword)}>
                            <Text style={styles.btntext}>Register</Text>
                        </TouchableOpacity>
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

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = { register, resetUserRegistered }

export default connect(mapStateToProps, mapDispatchToProps)(Register);