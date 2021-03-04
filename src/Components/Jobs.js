import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';


const Jobs = ({ navigation, bottom, item }) => {
  return (

    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={[styles.view, { marginBottom: "2%" }]}>
        <Text style={styles.text}>{item.Title}</Text>
        <Text style={styles.text1}>{item.Location}</Text>
        <View style={{ flexDirection: 'row', marginLeft: '8%', marginTop: '4%' }} >
          <Icon name={'circle'} style={{ paddingTop: 2 }} ></Icon>
          <Text style={styles.text2}>Catalogue all visual assets for marketing department.</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: '8%', marginTop: '4%' }} >
          <Icon name={'circle'} style={{ paddingTop: 2 }} ></Icon>
          <Text style={styles.text2}>Update marketing calendar with ongoing initiatives and
holiday details.</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: '8%', marginTop: '4%' }} >
          <Icon name={'circle'} style={{ paddingTop: 2 }} ></Icon>
          <Text style={styles.text2}>Familiarity with WordPress a plus.</Text>
        </View>
      </View>
    </View>

  )
}
export default Jobs;
const styles = StyleSheet.create({
  view: {
    height: 200,
    width: wp('90%'),
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 12,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  text: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 20

  },
  text1: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Segoe UI',
    paddingTop: 10,
    paddingLeft: 18
  },
  text2: {
    fontSize: 10,
    color: '#000000',
    fontFamily: 'Segoe UI',
    paddingLeft: 10,
    paddingRight: 10

  }



})