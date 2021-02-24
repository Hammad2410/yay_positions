
import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, Image, TextInput,
} from 'react-native';
import { Container, Content, Header, Left, Right, Body, Thumbnail } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const ButtonP = ({navigation,NameButton}) => {
    return (
        <TouchableOpacity>
        <View style={styles.textinput}>
            
       <Text style={{textAlign:'center',marginTop:5}} >{NameButton}</Text>
       </View>
       </TouchableOpacity>
    )
}
export default ButtonP;

const styles = StyleSheet.create({

    textinput:{
        height:hp('4%'),
        width:wp('25%'),
        borderColor:'#707070',
        borderWidth:0.5,
        borderRadius:5,
      alignContent:'center',
        marginBottom:15,
        marginLeft:-158,
        marginTop:30
      
    },
    

})