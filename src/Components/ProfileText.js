
import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, Image, TextInput,
} from 'react-native';
import { Container, Content, Header, Left, Right, Body, Thumbnail } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileText = ({ navigation, nametext, marginLeftt }) => {
    return (
        <Text
            style={[styles.textinput, { marginLeft: marginLeftt }]}>{nametext}</Text>
    )
}
export default ProfileText;

const styles = StyleSheet.create({

    textinput: {
        fontWeight: 'bold',
        // fontFamily:'Seoge UI',
        fontSize: 12,
        marginLeft: -240,
        marginBottom: 5,
        marginTop: 4
    },


})