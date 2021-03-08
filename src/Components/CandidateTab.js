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
          <TouchableOpacity style={{ flex:1,marginLeft:30}} onPress={() => {navigation.navigate('MyResume')}}>
          <Image resizeMode='contain' style={{width:30,height:30,tintColor:First}} source={require('../assests/image/person.png') } />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1}} onPress={() => {navigation.navigate('PersonalInfo')}} >
      <Image resizeMode='contain' style={{width:26,height:32,tintColor:Second}} source={require('../assests/image/document.png') } />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1}} onPress={() => {navigation.navigate('MyProfile')}} >
      <Image resizeMode='contain' style={{width:35,height:30,tintColor:Third}} source={require('../assests/image/upload.png') } />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1}}  onPress={() => {navigation.navigate('BrowseJobs')}}>
      <Image  resizeMode='contain' style={{width:30, height:30,tintColor:Fourth}} source={require('../assests/image/save.png') } />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1}} onPress={() => {navigation.navigate('Invitations')}} >
      <Image resizeMode='contain'  style={{width:36,height:28,tintColor:Fifth}} source={require('../assests/image/email.png') } />
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