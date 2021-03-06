import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';


const CandidateTab = ({ navigation,First,Second,Third,Fourth,Fifth}) => {
  return (

    <View >
      <View style={styles.view}>
          <TouchableOpacity style={{ flex:1,marginLeft:40}} onPress={() => {navigation.navigate('MyResume')}}>
          <Iconss name='person' size={30} style={{color:First }}/>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1}} onPress={() => {navigation.navigate('PersonalInfo')}} >
      <Icons  name='file-text' size={27}  style={{ color:Second }}/>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1}} onPress={() => {navigation.navigate('MyProfile')}} >
      <Icon5 name='upload' size={40}style={{ color:Third }}/>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1}}  onPress={() => {navigation.navigate('BrowseJobs')}}>
      <Icon name='save' size={35} style={{ color:Fourth }}/>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1}} onPress={() => {navigation.navigate('Invitations')}} >
      <Icon name='mail' size={35}   style={{ color:Fifth }} />
      </TouchableOpacity>
      </View>
    </View>

  )
}
export default CandidateTab;
const styles = StyleSheet.create({
  view: {
    height: 50,
    width: wp('100%'),
    backgroundColor: '#FAFAFA',
flexDirection:'row',
alignItems:'center',

  },
  



})