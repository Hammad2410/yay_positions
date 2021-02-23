
import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, Image, TextInput,
} from 'react-native';
import { Container, Content, Header, Left, Right, Body, Thumbnail } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const MyHeader = ({navigation}) => {
    return (
        <View>
            <Header androidStatusBarColor="white"
             style={{
                backgroundColor:"white",
                elevation: 0,
            }}>
                <Left style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back-outline" size={30}  />
                    </TouchableOpacity>
                </Left>
            </Header>
        </View>
    )
}
export default MyHeader;