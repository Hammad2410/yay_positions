import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Foundation';


const EmployerTab = ({ navigation,EFirst,EFifth,ESecond,EThird,EFourth}) => {
  return (

    <View >
      <View style={styles.view}>
          <TouchableOpacity style={{ flex:1,marginLeft:40,marginTop:5}} onPress={() => {navigation.navigate('CompanyDetail')}}>
          <Image resizeMode='contain' style={{width:40,height:40,tintColor:EFirst}} source={require('../assests/image/profile1.png') } />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1}} onPress={() => {navigation.navigate('CreateJob')}} >
      <Image resizeMode='contain' style={{width:38,height:38,tintColor:ESecond}} source={require('../assests/image/create.png') } />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1,marginTop:5}} onPress={() => {navigation.navigate('Efilter')}} >
      <Image resizeMode='contain' style={{width:35,height:30,tintColor:EThird}} source={require('../assests/image/upload.png') } />

      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1,marginTop:5}}  onPress={() => {navigation.navigate('Jobs')}}>
      <Image resizeMode='contain'  style={{width:36,height:28,tintColor:EFourth}} source={require('../assests/image/case.png') } />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1,marginTop:5}} onPress={() => {navigation.navigate('Invitationentries')}} >
      <Image resizeMode='contain'  style={{width:36,height:28,tintColor:EFifth}} source={require('../assests/image/email.png') } />
      </TouchableOpacity>
      </View>
    </View>

  )
}
export default EmployerTab;
const styles = StyleSheet.create({
  view: {
    height: 50,
    width: wp('100%'),
    backgroundColor: '#FAFAFA',
flexDirection:'row',
alignItems:'center',

  },
  



})