import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import EmployerDrawer from '../Components/EmployerDrawer'


const Employer = ({ navigation }) => {
    return (
        <Container style={{ backgroundColor: 'white' }} >
            <Content >

                <EmployerDrawer />
                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}>
                            <Icon style={{ paddingLeft: 25 }} name="arrow-back-outline" size={20} color='#E4E4E4' />
                        </TouchableOpacity>
                        <Text style={styles.text}>Hello Jason </Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={{ marginLeft: '80%' }}>Log Off</Text>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>
    )
}
export default Employer;
const styles = StyleSheet.create({

    header: {
        backgroundColor: '#001F3F',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Segoe UI',
        fontWeight: '500',
        marginRight: 70,
        marginBottom: 2

    },
    view: {
        backgroundColor: '#28A745',
        marginTop: '2%',
        marginHorizontal: '7%',
        borderRadius: 12,
        height: 200
    },
    text: {
        fontSize: 12,
        color: '#001F3F',
        fontFamily: 'Segoe UI',
        fontWeight: '500',
        paddingRight: 25,
        paddingTop: 4
    },
    text1: {
        fontSize: 16,
        color: '#666666',
        fontFamily: 'Segoe UI',

    },
    text2: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Segoe UI',
        paddingLeft: 20,
        paddingTop: 20

    },
    text3: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Segoe UI',
        paddingTop: 2,
        paddingRight: 5


    }

})