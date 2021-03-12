import { DefaultTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WebView } from 'react-native-webview';

const CandidateInvitations = ({ item }) => {
    const [openCall, setOpenCall] = useState(false);

    return (
        <View style={styles.view}>

            <View style={{ flexDirection: 'row' }}>
                <View style={styles.view1}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.text2}>Company Name</Text>
                        <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', marginLeft: 10, width: wp('40%') }}></View>
                        <Text style={styles.text2}>Phone</Text>
                        <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', marginLeft: 10, width: wp('40%') }}></View>
                        <Text style={styles.text2}>Country</Text>
                        <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', marginLeft: 10, width: wp('40%') }}></View>
                        <Text style={styles.text2}>Status</Text>
                        <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', marginLeft: 10, width: wp('40%') }}></View>
                        <Text style={styles.text2}>Meeting Date</Text>
                        <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', marginLeft: 10, width: wp('40%') }}></View>
                        <Text style={styles.text2}>Is Hired</Text>
                    </View>

                </View>
                <View style={styles.view2}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.text3}>{item.Company.CompanyName}</Text>
                        <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', width: wp('40%') }}></View>
                        <Text style={styles.text3}>{item.Company.PhoneNo}</Text>
                        <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', width: wp('40%') }}></View>
                        <Text style={styles.text3}>{item.Company.Country}</Text>
                        <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', width: wp('40%') }}></View>
                        <Text style={styles.text3}>{item.Status}</Text>
                        <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', width: wp('40%') }}></View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{
                                fontSize: 13,
                                color: '#000000',
                                fontFamily: 'Segoe UI',
                                paddingVertical: 20, paddingRight: 5
                            }}>{new Date(item.CallDateTime).toUTCString()}</Text>
                        </View>
                        <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', width: wp('40%') }}></View>
                        <Text style={styles.text3}>{item.IsHired}</Text>
                    </View>


                </View>
            </View>
            {
                item.RoomKey &&
                <TouchableOpacity style={styles.btn} onPress={() => { setOpenCall(true) }}>
                    <Text style={styles.btntext}>{"Join Call"}</Text>
                </TouchableOpacity>
            }

            {
                item.Status == 'Pending' &&
                <TouchableOpacity style={styles.btn} onPress={() => { setOpenCall(true) }}>
                    <Text style={styles.btntext}>{"Accept Invitation"}</Text>
                </TouchableOpacity>
            }
            <Modal
                visible={openCall}
            >
                <WebView source={{ uri: 'https://hiring.daily.co/' + item.RoomKey }} onNavigationStateChange={(state) => {
                    if (state.canGoBack) {
                        setOpenCall(false)
                    }
                }} />
            </Modal>
        </View>
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
        fontSize: 13,
        color: '#009961',
        fontFamily: 'Segoe UI',

    },
    view: {
        height: 460,
        alignSelf: 'center',
        width: wp('90%'),
        backgroundColor: 'white',
        marginTop: 15,
        marginBottom: 10,
        borderRadius: 12,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
    },
    view1: {
        width: wp('38%'),
        height: 370,
        backgroundColor: '#001F3F',
        borderBottomLeftRadius: 12,
        borderTopLeftRadius: 12,
        marginLeft: 10,
        marginVertical: 14

    },
    text2: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontFamily: 'Segoe UI',
        padding: 20
    },
    view2: {
        width: wp('40%'),
        height: 370,
        backgroundColor: 'white',
        borderBottomLeftRadius: 12,
        borderTopLeftRadius: 12,
        marginLeft: 10,
        marginVertical: 14
    },
    text3: {
        fontSize: 13,
        color: '#000000',
        fontFamily: 'Segoe UI',
        paddingVertical: 20,
        textAlign: 'right'
    },
    btn: {
        width: wp('30%'),
        height: 45,
        backgroundColor: '#17A2B8',
        borderRadius: 8,
        justifyContent: 'center',
        alignSelf: 'center'

    },
    btntext:
    {
        fontFamily: 'Segoe UI',
        fontSize: 14,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold'
    }


})

export default CandidateInvitations