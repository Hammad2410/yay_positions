import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Foundation';


const EmployerTab = ({ navigation}) => {
  return (

    <View >
      <View style={styles.view}>
          <TouchableOpacity style={{ flex:1,marginLeft:40}} onPress={() => {navigation.navigate('CompanyDetail')}}>
      <Icons   name='id-card' size={30} style={{ color:'green'}} />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1}} onPress={() => {navigation.navigate('CreateJob')}} >
      <Icon5   name='pencil-box' size={33} style={{ color:'green'}} />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1}} onPress={() => {navigation.navigate('BrowseCandidates')}} >
      <Icon5 name='upload' size={35} style={{ color:'green'}} />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1}}  onPress={() => {navigation.navigate('Jobs')}}>
      <IconF  name='shopping-bag' size={35}   style={{ color: 'green'}} />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex:1}} onPress={() => {navigation.navigate('Invitationentries')}} >
      <Icon   name='mail' size={34}   style={{ color: 'green' }} />
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