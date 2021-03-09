import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Content, Container, Header, Title, Left } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';



const Invitationcard = ({ item }) => {
  return (

    <View style={styles.view}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.view1}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.text2}>Company Name</Text>
            <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', marginLeft: 10, width: wp('40%') }}></View>
            <Text style={styles.text2}>Phone</Text>
            <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', marginLeft: 10, width: wp('40%') }}></View>
            <Text style={styles.text2}>Status</Text>
            <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', marginLeft: 10, width: wp('40%') }}></View>
            <Text style={styles.text2}>Meeting Date</Text>
            <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', marginLeft: 10, width: wp('40%') }}></View>
            <Text style={styles.text2}>Is Hired</Text>
            <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', marginLeft: 10, width: wp('40%') }}></View>
          </View>

        </View>
        <View style={styles.view2}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.text3}>{item.Company.CompanyName}</Text>
            <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', width: wp('43%') }}></View>
            <Text style={styles.text3}>{item.Company.PhoneNo}</Text>
            <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', width: wp('43%') }}></View>
            <Text style={styles.text3}>{item.Status}</Text>
            <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', width: wp('43%') }}></View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{
                fontSize: 13,
                color: '#000000',
                fontFamily: 'Segoe UI',
                paddingVertical: 20, paddingRight: 5
              }}>{new Date(item.CallDateTime).toUTCString()}</Text>
            </View>
            <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', width: wp('43%') }}></View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <Text style={styles.text4}>{item.IsHired.toString()}</Text>
              <TouchableOpacity disabled={true} style={styles.btn1}>
                <Text style={styles.btntext1}>Hired</Text>
              </TouchableOpacity>
            </View>
            <View style={{ borderWidth: 0.5, borderColor: '#E4E4E4', width: wp('43%') }}></View>
          </View>

        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>Join Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>Reschdule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>View Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btntext}>Delete</Text>
        </TouchableOpacity>
      </View>

    </View>


  )
}

const styles = StyleSheet.create({

  text: {
    color: '#707070',
    fontSize: 20,
  },

  line: {
    height: 5,
    width: wp('11%'),
    backgroundColor: '#009961',
    borderColor: '#707070',
    borderWidth: 2,
    marginTop: 10
  },

  text1: {
    fontSize: 13,
    color: '#009961',
    fontFamily: 'Segoe UI',
  },

  view: {
    height: 460,
    alignSelf: 'center',
    width: wp('90%'),
    backgroundColor: 'white',
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 12,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },

  view1: {
    width: wp('38%'),
    height: 340,
    backgroundColor: '#001F3F',
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
    marginLeft: 10,
    marginVertical: 14
  },

  text2: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Segoe UI',
    padding: 20
  },

  view2: {
    width: wp('40%'),
    height: 340,
    backgroundColor: 'white',
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
    marginLeft: 10,
    marginVertical: 14
  },

  text3: {
    fontSize: 13,
    color: '#000000',
    fontFamily: 'Segoe UI',
    paddingVertical: 20,
    textAlign: 'right'
  },

  btn: {
    width: wp('20%'),
    height: 40,
    backgroundColor: '#17A2B8',
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5
  },

  btntext:
  {
    fontFamily: 'Segoe UI',
    fontSize: 11,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  btn2: {
    width: wp('20%'),
    height: 40,
    backgroundColor: '#B81717',
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5
  },

  btn1: {
    width: wp('25%'),
    height: 40,
    backgroundColor: '#17A2B8',
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 10,
    marginLeft: 5
  },

  btntext1:
  {
    fontFamily: 'Segoe UI',
    fontSize: 13,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold'
  },

  text4: {
    fontSize: 13,
    color: '#000000',
    fontFamily: 'Segoe UI',
    paddingVertical: 20,
    marginLeft: 20
  },

})



export default Invitationcard;