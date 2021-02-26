
import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, Image, TextInput,
} from 'react-native';
import { Container, Content, Header, Left, Right, Body, Thumbnail } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = ({navigation,plholder}) => {
    return (
        <View style={{alignItems:'center'}}>
        <DropDownPicker
            placeholder={ plholder ||'1 Year'}
            placeholderStyle={{color:'#707070',fontSize:11.33}}
            arrowSize={20}
            arrowColor={'#47525E'}
            containerStyle={{height: 40,  width:wp('80%'),}}
            style={{backgroundColor: '#fffff',borderColor:'#707070',alignSelf:'center',borderRadius:5,borderWidth:0.5}}
            dropDownStyle={{backgroundColor: '#ffffff'}}
        />
        </View>
    )
}
export default Dropdown;

