
import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, Image, TextInput,
} from 'react-native';
import { Container, Content, Header, Left, Right, Body, Thumbnail } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.development';


const TextInputLogin = ({navigation,name1,value}) => {
    return (
       <TextInput placeholder={ name1 || "Email" } secureTextEntry={value} placeholderTextColor='#707070'
       style={styles.textinput}></TextInput>
    )
}
export default TextInputLogin;

const styles = StyleSheet.create({

    textinput:{
        
        height:hp('5%'),
        width:wp('80%'),
        borderColor:'#707070',
        borderWidth:0.5,
        borderRadius:5,
        fontSize:12,
        padding:10,
        marginBottom:15,
        alignSelf:'center',
    },
    

})