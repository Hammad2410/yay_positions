
import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, Image, TextInput,
} from 'react-native';
import { Container, Content, Header, Left, Right, Body, Thumbnail } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const ButtonP = ({ navigation, NameButton, buttonAction,Bwidth,Mleft }) => {
    return (
        <TouchableOpacity onPress={() => buttonAction()}>
            <View style={[styles.textinput,{width:Bwidth,marginLeft:Mleft}]}>
                <Text style={{ textAlign: 'center', marginTop: 5 ,color:'#009961'}} >{NameButton}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default ButtonP;

const styles = StyleSheet.create({

    textinput: {
        height: hp('4%'),

        borderColor: '#009961',
        borderWidth: 0.5,
        borderRadius: 5,
        alignContent: 'center',
        marginBottom: 15,
        // marginLeft: -158,
        marginTop: 30

    },


})